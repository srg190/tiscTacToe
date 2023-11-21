import { addEventInIcon } from "./components/backIcon/index.js";
import { addEventsInCard } from "./page/welcome/index.js";
import {
  addEventInTableData,
  addEventsInOptions,
} from "./page/game/eventListners.js";
import { onClickOption, onClickTableData } from "./page/game/index.js";

export default () => {
  addEventsInCard();
  addEventInIcon();
  addEventsInOptions(onClickOption);
  addEventInTableData(onClickTableData);
};
