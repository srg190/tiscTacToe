import { selectQuery } from "../targetElements/index.js";
const query = selectQuery();
export const noticeBoardMessage = (text) => {
  let noticeBoard = query.noticeBoardMessage;
  noticeBoard.innerHTML = text;
};

export const appendMatchCard = (data) => {
  //   let matchCards = query.matchCard;
  let matchCardContainer = query.matchCardContainer;
  let scoreBoard = document.createElement("div");
  scoreBoard.className = "score-board-data score-card";
  let matchInfo = document.createElement("div");
  matchInfo.className = "match-info";
  matchInfo.innerHTML = `Match : #${data.matchNum}`;
  scoreBoard.appendChild(matchInfo);
  let playerInfo = document.createElement("div");
  playerInfo.className = "player-info";
  playerInfo.innerHTML = `Win : ${data.win}`;
  scoreBoard.appendChild(playerInfo);
  matchCardContainer[1].appendChild(scoreBoard);
  scoreBoard.id = `game-${data.matchNum}`;
  // console.log(matchCardContainer, data,"data");
  // appendMatchCard();
};
