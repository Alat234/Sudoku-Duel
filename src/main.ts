import "./styles/main.css";
import "./styles/layout.css";
import "./styles/board.css";
import "./styles/effects.css";

import { AppRouter } from "./router/AppRouter";
import { FirebaseService } from "./services/FirebaseService";
import { RoomService } from "./services/RoomService";
import { StorageService } from "./services/StorageService";
import { SudokuService } from "./services/SudokuService";
import { ScoreService } from "./services/ScoreService";
import { AbilityService } from "./services/AbilityService";
import { RegionService } from "./services/RegionService";
import { TimerService } from "./services/TimerService";

import { HomeView } from "./views/HomeView";
import { LobbyView } from "./views/LobbyView";
import { GameView } from "./views/GameView";
import { ResultView } from "./views/ResultView";

import { HomeController } from "./controllers/HomeController";
import { LobbyController } from "./controllers/LobbyController";
import { GameController } from "./controllers/GameController";
import { ResultController } from "./controllers/ResultController";

const firebaseService = new FirebaseService();
const roomService = new RoomService(firebaseService);
const storageService = new StorageService();
const sudokuService = new SudokuService();
const scoreService = new ScoreService();
const abilityService = new AbilityService();
const regionService = new RegionService();
const timerService = new TimerService();

const router = new AppRouter();

let currentController: { destroy?: () => void } | null = null;

function destroyCurrentController(): void {
  if (currentController?.destroy) {
    currentController.destroy();
  }
  currentController = null;
}

function renderRoute(): void {
  destroyCurrentController();

  const route = router.getCurrentRoute();

  if (route.page === "lobby" && route.roomCode) {
    const controller = new LobbyController(
      new LobbyView(),
      roomService,
      firebaseService,
      storageService,
      router,
    );
    currentController = controller;
    controller.init(route.roomCode);
    return;
  }

  if (route.page === "game" && route.roomCode) {
    const controller = new GameController(
      new GameView(),
      roomService,
      firebaseService,
      storageService,
      sudokuService,
      scoreService,
      abilityService,
      regionService,
      timerService,
      router,
    );
    currentController = controller;
    controller.init(route.roomCode);
    return;
  }

  if (route.page === "result" && route.roomCode) {
    const controller = new ResultController(
      new ResultView(),
      firebaseService,
      roomService,
      router,
    );
    currentController = controller;
    void controller.init(route.roomCode);
    return;
  }

  const controller = new HomeController(
    new HomeView(),
    roomService,
    storageService,
    router,
  );
  currentController = controller;
  controller.init();
}

window.addEventListener("hashchange", renderRoute);
renderRoute();
