import { selectQuery } from "../../components/targetElements/index.js";
import cssProps from "../../functionalities/cssProps.js";
import { TicTacToe } from "./ticTacToe.js";
import {
  noticeBoardMessage,
  appendMatchCard,
} from "../../components/noticeBoard/index.js";

const query = selectQuery();
export const game = new TicTacToe();
export const onClickOption = (e) => {
  // console.log(e.target.id, " here ");
};

export const liveScore = () => {
  noticeBoardMessage(`${game.winnerName} has won!!!`);
  // game.
  let data = {
    matchNum: game.matchCount,
    win: game.winnerName,
  };
  appendMatchCard(data);
};

export const onClickTableData = (e) => {
  let id = e.target.id;
  let loc = id.split("-")[1];
  let coordinate = {
    x: loc % 3,
    y: Math.floor(loc / 3),
  };
  // // console.log(coordinate, id);
  if (!game.Win()) {
    game.playGame(coordinate, id);
  }
  let score = query.score;
  score[0].innerHTML = game.playAWinCount;
  score[1].innerHTML = game.playBWinCount;
};

export const playGame = (toggle) => {
  query.playOption.style.cssText = cssProps({
    display: toggle ? "none" : "",
  });
  query.backContainer.style.cssText = cssProps({
    display: toggle ? "none" : "",
  });
  query.ticGrid.style.cssText = cssProps({
    display: toggle ? "flex" : "none",
  });
  query.displayPlayer.style.cssText = cssProps({
    display: toggle ? "flex" : "none",
  });
};

export const onChangeName = (e) => {
  if (e.code === "Enter") {
    let txt = e.target.value;
    let id = e.target.id.split("-")[1];
    game.setPlayerName(id == 1 ? txt : null, id == 2 ? txt : null);
    let inputData = query.input;
    inputData =
      txt.charAt(0).toUpperCase() + `${txt} : ${id == 1 ? "X" : "O"}`.slice(1);
  }
};

export const onRematch = () => {
  game.resetGame();
  let headText = query.welcomeHead;
  headText.innerHTML = "Welcome to the Game";
  let datas = query.tableData;
  for (let data of datas) {
    data.innerHTML = "T";
  }
};
