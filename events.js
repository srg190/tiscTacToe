import { addEventInIcon } from "./components/backIcon/index.js";
import { addEventsInCard } from "./page/welcome/index.js";
import {
  addEventInPlayername,
  addEventInTableData,
  addEventToRematch,
  addEventsInOptions,
} from "./page/game/eventListners.js";
import {
  onChangeName,
  onClickOption,
  onClickTableData,
  onRematch,
} from "./page/game/index.js";

export default () => {
  addEventsInCard();
  addEventInIcon();
  addEventsInOptions(onClickOption);
  addEventInTableData(onClickTableData);
  addEventInPlayername(onChangeName);
  addEventToRematch(onRematch);
};
