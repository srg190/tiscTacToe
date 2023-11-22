import { selectQuery } from "../../components/targetElements/index.js";

const query = selectQuery();
export const addEventsInOptions = (fun) => {
  let options = query.optionCards;
  for (let option of options) {
    option.addEventListener("click", fun);
  }
};

export const addEventInTableData = (fn) => {
  let datas = query.tableData;
  let i = 0;
  for (let data of datas) {
    data.id = `data-${i}`;
    i++;
    data.addEventListener("click", fn);
  }
};

export const addEventInPlayername = (fn) => {
  let players = query.player;
  let i = 1;
  for (let player of players) {
    player.id = `player-${i}`;
    i++;
    player.addEventListener("dblclick", fn);
  }
};

export const addEventToRematch = (fn) => {
  let tableBody = query.table;
  tableBody.addEventListener("dblclick", fn);
};
