////////////
import { setTheme } from "./Theme/theme.js";
import { Alert } from "./components/alert/index.js";
import Events from "./events.js";
import { playGame } from "./page/game/index.js";

(() => {
  setTheme();
  playGame(false);
})();
let alert = new Alert();
alert.CreatingAlert();
Events();
