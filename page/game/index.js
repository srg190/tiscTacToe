import { solve } from "./solve.js";

export const onClickOption = (e) => {
  console.log(e.target.id, " here ");
};

let flag = 1;
export const onClickTableData = (e) => {
  let id = e.target.id;
  let data = document.getElementById(id);
  let fill = data.innerHTML === "X" || data.innerHTML === "O";
  let loc = id.split("-")[1];
  let coordinate = {
    x: loc % 3,
    y: Math.floor(loc / 3),
  };
  if (!fill) {
    if (flag) {
      data.innerHTML = "X";
      player.a++;
      flag = 0;
    } else {
      data.innerHTML = "O";
      player.b++;
      flag = 1;
    }
  }
  let whoWillWin = solve(coordinate, id, data.innerHTML);
};
