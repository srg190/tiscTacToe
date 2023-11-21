import { TicTacToe } from "./ticTacToe.js";
export const solve = (coordinate, id, activePlayer) => {
  const rows = 3;
  const columns = 3;

  const arr = Array(rows)
    .fill()
    .map(() => Array(columns).fill(0));
  let player = {
    x: 0,
    y: 0,
  };
  const solveTTT = new TicTacToe("X", "O", arr);
  solveTTT.fillData();
  return () => {
    if (solveTTT.canPut(coordinate)) {
      if (activePlayer === "X") {
        solveTTT.playerOne(coordinate);
        player.x++;
      } else {
        solveTTT.playerSecond(coordinate);
        player.y++;
      }
    }
  };
};
