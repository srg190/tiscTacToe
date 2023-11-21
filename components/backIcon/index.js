import { selectQuery } from "../targetElements/index.js";

const query = selectQuery();
export const addEventInIcon = (fn) => {
  let icon = query.backIcon;
  icon.addEventListener("click", () => {
    window.location.reload();
  });
};
