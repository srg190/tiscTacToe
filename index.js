////////////
import { setTheme } from "./Theme/theme.js";
// import { Alert } from "./components/alert/index.js";
import Events from "./events.js";
import { game, playGame } from "./page/game/index.js";

(() => {
  setTheme();
  playGame(false);
  game.initializePlayerData();
})();
// let alert = new Alert();
// alert.CreatingAlert();
Events();
