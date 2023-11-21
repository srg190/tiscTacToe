import { selectQuery } from "../targetElements/index.js";
import cssProps from "../../functionalities/cssProps.js";
import { themePallete } from "../../Theme/themePallete.js";

const query = selectQuery();
export const createContainer = () => {
  query.modeContainer.style.cssText = cssProps({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    textAlign: "center"
  });
};

export const createCard = (data) => {
  createContainer();
  let cards = query.optionCards;
  let i = 0;
  for (let card of cards) {
    card.style.cssText = cssProps({
      margin: "2rem",
      padding: "1rem",
      width: "25%",
      height: "5%",
      borderRadius: "16px",
      color: "white",
      backgroundColor: themePallete.violet2_10,
      cursor: "pointer",
      fontSize: "2vw"
    });
    card.id = `game-${i}`;
    i++;
  }
  return cards;
};
