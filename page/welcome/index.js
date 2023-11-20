import { selectQuery } from "../../components/targetElements/index.js";
import { createCard } from "../../components/cards/index.js";

// .head {
//   height: 35%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   font-family: sans-serif;
//   font-size: 6vw;
// }
const query = selectQuery();
let flag = false;
const fired = (e) => {
  if (!flag) {
    document
      .querySelector(`#game-${e.target.id.split("-")[1] == 1 ? 0 : 1}`)
      .remove();
    flag = true;
  }
};
export const addEventsInCard = () => {
  let cards = createCard();
  for (let card of cards) {
    // console.log(card, " card");
    card.addEventListener("click", fired);
  }
};
