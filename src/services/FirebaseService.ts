import { initializeApp, type FirebaseApp } from "firebase/app";
import {
  getDatabase,
  ref,
  set,
  get,
  update,
  onValue,
  remove,
  type Database,
} from "firebase/database";

import { firebaseConfig, isFirebaseConfigured } from "../config/firebaseConfig";
import type { ActiveEffect } from "../models/Ability";
import type { PlayerState } from "../models/Player";
import type { RoomState } from "../models/Room";

export class FirebaseService {
  private app: FirebaseApp | null = null;
  private database: Database | null = null;

  private ensureDatabase(): Database {
    if (!isFirebaseConfigured()) {
      throw new Error(
        "Firebase is not configured. Fill src/config/firebaseConfig.ts first.",
      );
    }

    if (!this.app || !this.database) {
      this.app = initializeApp(firebaseConfig);
      this.database = getDatabase(this.app);
    }

    return this.database;
  }

  async createRoom(room: RoomState): Promise<void> {
    const db = this.ensureDatabase();
    await set(ref(db, `rooms/${room.roomCode}`), room);
  }

  async getRoom(roomCode: string): Promise<RoomState | null> {
    const db = this.ensureDatabase();
    const snapshot = await get(ref(db, `rooms/${roomCode}`));
    return snapshot.exists() ? (snapshot.val() as RoomState) : null;
  }

  subscribeToRoom(
    roomCode: string,
    callback: (room: RoomState | null) => void,
  ): () => void {
    const db = this.ensureDatabase();
    const roomRef = ref(db, `rooms/${roomCode}`);

    return onValue(roomRef, (snapshot) => {
      callback(snapshot.exists() ? (snapshot.val() as RoomState) : null);
    });
  }

  async updateRoom(roomCode: string, partialRoom: Partial<RoomState>): Promise<void> {
    const db = this.ensureDatabase();
    await update(ref(db, `rooms/${roomCode}`), partialRoom);
  }

  async updatePlayer(
    roomCode: string,
    playerId: string,
    player: Partial<PlayerState>,
  ): Promise<void> {
    const db = this.ensureDatabase();
    await update(ref(db, `rooms/${roomCode}/players/${playerId}`), player);
  }

  async addActiveEffect(roomCode: string, effect: ActiveEffect): Promise<void> {
    const db = this.ensureDatabase();
    await set(ref(db, `rooms/${roomCode}/activeEffects/${effect.id}`), effect);
  }

  async removeActiveEffect(roomCode: string, effectId: string): Promise<void> {
    const db = this.ensureDatabase();
    await remove(ref(db, `rooms/${roomCode}/activeEffects/${effectId}`));
  }
}
