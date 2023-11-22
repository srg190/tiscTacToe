import { selectQuery } from "../../components/targetElements/index.js";
const query = selectQuery();
export class TicTacToe {
  constructor() {
    this.board = Array(3)
      .fill()
      .map(() => Array(3).fill(" "));
    this.activePlayer = "X";
    this.query = selectQuery();
    this.uiActivePlayer = this.query.welcomeHead.innerHTML;
    this.uiActivePlayer = "X";
    this.flag = false;
    this.playAWinCount = 0;
    this.playBWinCount = 0;
  }
  // {x, y} => coordinates of board
  displayOnBoard() {
    for (let x of this.board) {
      console.log(x.join("|"));
      console.log("-".repeat(5));
    }
  } // not need already managed
  makeMove(x, y, id) {
    if (x >= 0 && x < 3 && y >= 0 && y < 3 && this.board[x][y] == " ") {
      // checking edges of board
      this.board[x][y] = this.activePlayer;
      document.getElementById(id).innerHTML = this.uiActivePlayer;
      return true;
    } else {
      console.log("Invalid Choice. Please Try Again");
      return false;
    }
  }
  switchPlayer() {
    this.activePlayer = this.activePlayer === "X" ? "O" : "X";
    this.uiActivePlayer = this.uiActivePlayer === "X" ? "O" : "X";
  }
  checkWinner() {
    // need to check Row, Col, Diagonal
    for (let i = 0; i < 3; i++) {
      // row check
      if (
        this.board[i][0] === this.board[i][1] &&
        this.board[i][1] === this.board[i][2] &&
        this.board[i][0] !== " "
      ) {
        return true;
      }
      // col win
      if (
        this.board[0][i] === this.board[1][i] &&
        this.board[1][i] === this.board[2][i] &&
        this.board[0][i] !== " "
      ) {
        return true;
      }

      // depressent Diagonal
      if (
        this.board[0][0] === this.board[1][1] &&
        this.board[1][1] === this.board[2][2] &&
        this.board[0][0] !== " "
      ) {
        return true;
      }

      // elevation Diagonal
      if (
        this.board[2][0] === this.board[1][1] &&
        this.board[1][1] === this.board[0][2] &&
        this.board[2][0] !== " "
      ) {
        return true;
      }
    }
    return false;
  }
  isBoardFull() {
    return this.board.every((x) => x.every((y) => y !== " "));
  }
  Win() {
    return this.flag;
  }
  reMatchText() {
    let headText = query.welcomeHead;
    return (headText.innerHTML = "To Rematch Doubl-Click On Game Area");
  }
  playGame(coordinate, id) {
    let { x, y } = coordinate;
    if (this.makeMove(x, y, id)) {
      if (this.checkWinner()) {
        // console.log(`Player ${this.activePlayer} wins!!!`);
        this.activePlayer === "X" ? this.playAWinCount++ : this.playBWinCount++;
        this.reMatchText();
        alert(`Player ${this.activePlayer} wins!!!`);
        this.flag = true;
      } else if (this.isBoardFull()) {
        // console.log(`Match Tie!!!`);
        this.reMatchText();
        alert(`Match Tie!!!`);
        this.flag = true;
      } else {
        this.switchPlayer();
      }
    }
  }
  resetGame() {
    this.board = Array(3)
      .fill()
      .map(() => Array(3).fill(" "));
    this.flag = false;
  }
}
