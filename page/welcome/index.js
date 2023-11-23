import { selectQuery } from "../../components/targetElements/index.js";
import { createCard } from "../../components/cards/index.js";
import cssProps from "../../functionalities/cssProps.js";
import { addEventInIcon } from "../../components/backIcon/index.js";
import { playGame } from "../game/index.js";

const query = selectQuery();

const liveCount = () => {
  let count = 3;
  const timer = setInterval(function () {
    let counter = query.welcomeHead;
    count--;
    counter.innerHTML = `Your game will starts in ... ${count}`;
    if (count === 0) {
      counter.innerHTML = "Welcome to the Game";
      clearInterval(timer);
      // console.log("Time's up!");
      playGame(true);
    }
  }, 1000);
};

const fired = (e) => {
  let flag = false;
  if (!flag) {
    if (
      document.querySelector(`#game-${e.target.id.split("-")[1] == 1 ? 0 : 1}`)
    )
      document
        .querySelector(`#game-${e.target.id.split("-")[1] == 1 ? 0 : 1}`)
        .remove();

    query.backIcon.style.cssText = cssProps({
      display: "block",
    });
    let option = document.querySelector(`#game-${e.target.id.split("-")[1]}`);

    option.removeEventListener("click", fired);
    option.style.cssText = cssProps({
      backgroundColor: "rgb(179, 140, 201) !important",
      color: "#611edc !important",
      border: "1px solid !important",
      // transitionDelay: "0.1s",
    });
    liveCount();
    flag = true;
  } else if (query.optionCards == 1) {
    query.backIcon.style.cssText = cssProps({
      display: "contents",
    });
  }
};

export const addEventsInCard = () => {
  let cards = createCard();
  for (let card of cards) {
    card.addEventListener("click", fired);
  }
};
