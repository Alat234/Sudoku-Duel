import { DIFFICULTY_SETTINGS, MAX_PLAYERS } from "../config/gameConfig";
import type { Difficulty } from "../models/Difficulty";
import type { PlayerState } from "../models/Player";
import type { FinishReason, RoomState } from "../models/Room";
import { generateId, generateRoomCode } from "../utils/idGenerator";
import type { FirebaseService } from "./FirebaseService";
import { SudokuService } from "./SudokuService";

export class RoomService {
  private sudokuService = new SudokuService();

  constructor(private readonly firebaseService: FirebaseService) {}

  async createRoom(nickname: string): Promise<{ roomCode: string; playerId: string }> {
    const roomCode = generateRoomCode();
    const playerId = generateId("player");
    const createdAt = Date.now();

    const host: PlayerState = this.createPlayer(playerId, nickname, "host");

    const room: RoomState = {
      roomCode,
      status: "waiting",
      difficulty: "easy",
      puzzleId: null,
      createdAt,
      startedAt: null,
      finishedAt: null,
      durationSeconds: DIFFICULTY_SETTINGS.easy.durationSeconds,
      hostPlayerId: playerId,
      players: {
        [playerId]: host,
      },
      activeEffects: {},
      winnerPlayerId: null,
      finishReason: null,
    };

    await this.firebaseService.createRoom(room);
    return { roomCode, playerId };
  }

  async joinRoom(roomCode: string, nickname: string): Promise<{ playerId: string }> {
    const room = await this.firebaseService.getRoom(roomCode);

    if (!room) {
      throw new Error("Room not found.");
    }

    const players = Object.values(room.players);
    if (players.length >= MAX_PLAYERS) {
      throw new Error("Room is full.");
    }

    const playerId = generateId("player");
    const guest = this.createPlayer(playerId, nickname, "guest");

    await this.firebaseService.updateRoom(roomCode, {
      status: "lobby",
      players: {
        ...room.players,
        [playerId]: guest,
      },
    });

    return { playerId };
  }

  async setReady(roomCode: string, playerId: string, ready: boolean): Promise<void> {
    await this.firebaseService.updatePlayer(roomCode, playerId, { ready });
  }

  async setDifficulty(roomCode: string, difficulty: Difficulty): Promise<void> {
    await this.firebaseService.updateRoom(roomCode, {
      difficulty,
      durationSeconds: DIFFICULTY_SETTINGS[difficulty].durationSeconds,
    });
  }

  async tryStartGame(roomCode: string, room: RoomState): Promise<void> {
    const players = Object.values(room.players);

    if (room.status === "playing" || room.status === "finished") {
      return;
    }

    if (players.length !== MAX_PLAYERS || !players.every((player) => player.ready)) {
      return;
    }

    const puzzle = this.sudokuService.getRandomPuzzleByDifficulty(room.difficulty);
    const initialBoard = this.sudokuService.createBoard(puzzle);
    const initialPublicBoard = this.sudokuService.createPublicBoard(initialBoard);
    const initialProgress = this.sudokuService.calculateProgress(initialBoard);
    const preparedPlayers: Record<string, PlayerState> = {};

    for (const [playerId, player] of Object.entries(room.players)) {
      preparedPlayers[playerId] = {
        ...player,
        score: 0,
        errors: 0,
        progress: initialProgress,
        isFrozen: false,
        finishedAt: null,
        abilities: player.abilities ?? [],
        completedRows: [],
        completedColumns: [],
        completedBlocks: [],
        publicBoard: initialPublicBoard,
      };
    }

    await this.firebaseService.updateRoom(roomCode, {
      status: "playing",
      puzzleId: puzzle.id,
      startedAt: Date.now(),
      durationSeconds: DIFFICULTY_SETTINGS[room.difficulty].durationSeconds,
      players: preparedPlayers,
      activeEffects: {},
      winnerPlayerId: null,
      finishReason: null,
    });
  }

  async finishGame(roomCode: string, reason: FinishReason, winnerPlayerId: string | null): Promise<void> {
    await this.firebaseService.updateRoom(roomCode, {
      status: "finished",
      finishedAt: Date.now(),
      finishReason: reason,
      winnerPlayerId,
    });
  }

  async resetRoomForRematch(roomCode: string): Promise<void> {
    const room = await this.firebaseService.getRoom(roomCode);

    if (!room) {
      throw new Error("Room not found.");
    }

    const resetPlayers: Record<string, PlayerState> = {};

    for (const [playerId, player] of Object.entries(room.players)) {
      resetPlayers[playerId] = {
        ...player,
        ready: false,
        connected: true,
        score: 0,
        errors: 0,
        progress: 0,
        isFrozen: false,
        finishedAt: null,
        abilities: [],
        completedRows: [],
        completedColumns: [],
        completedBlocks: [],
        publicBoard: Array(81).fill(0) as number[],
      };
    }

    await this.firebaseService.updateRoom(roomCode, {
      status: Object.keys(resetPlayers).length >= MAX_PLAYERS ? "lobby" : "waiting",
      puzzleId: null,
      startedAt: null,
      finishedAt: null,
      durationSeconds: DIFFICULTY_SETTINGS[room.difficulty].durationSeconds,
      players: resetPlayers,
      activeEffects: {},
      winnerPlayerId: null,
      finishReason: null,
    });
  }

  async leaveRoom(roomCode: string, playerId: string): Promise<void> {
    const room = await this.firebaseService.getRoom(roomCode);

    if (!room) {
      return;
    }

    if (room.status === "playing") {
      await this.finishGame(roomCode, "player-left", this.findOpponentId(room, playerId));
      return;
    }

    const nextPlayers = { ...room.players };
    delete nextPlayers[playerId];

    await this.firebaseService.updateRoom(roomCode, {
      players: nextPlayers,
      status: Object.keys(nextPlayers).length === 0 ? "finished" : "waiting",
    });
  }

  private createPlayer(id: string, nickname: string, role: "host" | "guest"): PlayerState {
    return {
      id,
      nickname,
      role,
      ready: false,
      connected: true,
      score: 0,
      errors: 0,
      progress: 0,
      isFrozen: false,
      finishedAt: null,
      abilities: [],
      completedRows: [],
      completedColumns: [],
      completedBlocks: [],
      publicBoard: Array(81).fill(0) as number[],
    };
  }

  private findOpponentId(room: RoomState, playerId: string): string | null {
    const opponent = Object.values(room.players).find((player) => player.id !== playerId);
    return opponent?.id ?? null;
  }
}
