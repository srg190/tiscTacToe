import { selectQuery } from "../../components/targetElements/index.js";
import cssProps from "../../functionalities/cssProps.js";
import { TicTacToe } from "./ticTacToe.js";

const query = selectQuery();
let game = new TicTacToe();
export const onClickOption = (e) => {
  console.log(e.target.id, " here ");
};
export const onClickTableData = (e) => {
  let id = e.target.id;
  let loc = id.split("-")[1];
  let coordinate = {
    x: loc % 3,
    y: Math.floor(loc / 3),
  };
  console.log(coordinate, id);
  if (!game.Win()) game.playGame(coordinate, id);
 
};

export const playGame = (toggle) => {
  let option = query.playOption;
  let backIcon = query.backContainer;
  let ticGrid = query.ticGrid;
  let displayPlayer = query.displayPlayer;
  option.style.cssText = cssProps({
    display: toggle ? "none" : "",
  });
  backIcon.style.cssText = cssProps({
    display: toggle ? "none" : "",
  });
  ticGrid.style.cssText = cssProps({
    display: toggle ? "flex" : "none",
  });
  displayPlayer.style.cssText = cssProps({
    display: toggle ? "flex" : "none",
  });
};
