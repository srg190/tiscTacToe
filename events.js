import { addEventInIcon } from "./components/backIcon/index.js";
import { addEventsInCard } from "./page/welcome/index.js";
import {
  addEnterKeyInInput,
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
import { addEventInWindow } from "./features/numberOfClicks/events.js";
import { onClickWindow } from "./features/numberOfClicks/index.js";

export default () => {
  addEventsInCard();
  addEventInIcon();
  addEventsInOptions(onClickOption);
  addEventInTableData(onClickTableData);
  addEventInPlayername(onChangeName);
  addEventToRematch(onRematch);
  addEventInWindow(onClickWindow);
  addEnterKeyInInput(onChangeName);
};
