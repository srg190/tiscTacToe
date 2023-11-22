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
  // console.log(coordinate, id);
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

export const onChangeName = async (e) => {
  let txt = "";
  let id = e.target.id.split("-")[1];
  let newName = document.getElementById(e.target.id);

  if (confirm("Want To Change Your Name ?")) {
    let inputData = query.input;
    inputData.removeAttribute('readonly');
    inputData =
      txt.charAt(0).toUpperCase() + `${txt} : ${id == 1 ? "X" : "O"}`.slice(1);
  } else {
    txt = "You pressed Cancel!";
  }
  console.log(txt);
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
