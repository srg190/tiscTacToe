import { selectQuery } from "../components/targetElements/index.js";
import cssProps from "../functionalities/cssProps.js";
import { themePallete } from "./themePallete.js";
import { addEventsInCard } from "../page/welcome/index.js";
const query = selectQuery();
export const setTheme = () => {
  query.body.style.cssText = cssProps({
    margin: 0,
    padding: 0,
    backgroundColor: "red",
  });
  query.root.style.cssText = cssProps({
    backgroundColor: themePallete.white2_40,
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  });
  query.container.style.cssText = cssProps({
    width: "80vw",
    height: "80vh",
    left: "10%",
    top: "10%",
    backgroundColor: themePallete.violet1_20,
    borderRadius: "16px",
  });
  query.welcomeHead.style.cssText = cssProps({
    height: "25%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamiy: "sans-serif",
    fontSize: "7vw",
  });
  addEventsInCard();
};

