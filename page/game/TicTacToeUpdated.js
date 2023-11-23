class TicTacToe {
  constructor(n) {
    this.n = n;
    this.board = Array(n)
      .fill()
      .map(() => Array(n).fill(" "));
    this.activePlayer = "X";
    this.flag = false;
    this.playAWinCount = 0;
    this.playBWinCount = 0;
  }
  // {x, y} => coordinates of board
  displayOnBoard() {
    for (let x of this.board) {
      // console.log(x.join("|"));
      // console.log("-".repeat(2 * this.n - 1));
    }
  } // not need already managed

  makeMove(x, y) {
    if (
      x >= 0 &&
      x < this.n &&
      y >= 0 &&
      y < this.n &&
      this.board[x][y] == " "
    ) {
      // checking edges of board
      this.board[x][y] = this.activePlayer;
      this.displayOnBoard();
      return true;
    } else {
      // console.log("Invalid Choice. Please Try Again");
      return false;
    }
  }

  switchPlayer() {
    this.activePlayer = this.activePlayer === "X" ? "O" : "X";
  }

  checkWinner(x, y) {
    let pos = this.checkPosition(x, y);
    return this.getWin({ x, y }, pos);
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

  rowCheck(x, y) {
    for (let i = 0; i < this.n; i++) {
      if (this.board[x][i] === " " || this.board[x][i] !== this.activePlayer) {
        return false;
      }
    }
    return true;
  }

  colCheck(x, y) {
    for (let i = 0; i < this.n; i++) {
      if (this.board[i][y] === " " || this.board[i][y] !== this.activePlayer) {
        return false;
      }
    }
    return true;
  }

  diagCheck(x, y) {
    if (x === y) {
      for (let i = 0; i < this.n; i++) {
        if (
          this.board[i][i] === " " ||
          this.board[i][i] !== this.activePlayer
        ) {
          return false;
        }
      }
    }
    if ((x === y && x === Math.floor(this.n / 2)) || x !== y) {
      let j = this.n - 1;
      for (let i = 0; i < this.n; i++) {
        if (
          this.board[i][j - i] === " " ||
          this.board[i][j - i] !== this.activePlayer
        ) {
          return false;
        }
      }
    }
    return true;
  }

  checkPosition(x, y) {
    let arr = [0, this.n - 1];
    let pos = {
      corner: 0,
      middileSide: 1,
      insideBoundries: 2,
      center: 3,
    };
    if (arr.includes(x) && arr.includes(y) && x !== Math.floor(this.n / 2)) {
      return pos["corner"];
    } else if (arr.includes(x) || arr.includes(y)) {
      return pos["middileSide"];
    } else if (x === y && x === Math.floor(this.n / 2)) {
      return pos["center"];
    } else {
      return pos["insideBoundries"];
    }
  }

  getWin({ x, y }, pos) {
    let flag = false;
    switch (pos) {
      case 0:
        flag = rowCheck(x, y) || colCheck(x, y) || diagCheck(x, y);
        break;

      case 1 || 2:
        flag = rowCheck(x, y) || colCheck(x, y);
        break;

      case 3:
        flag = rowCheck(x, y) || colCheck(x, y) || diagCheck(x, y);
        break;
    }
    return flag;
  }

  playGame() {
    while (true) {
      // console.log(`Chance of Player : ${this.activePlayer}`);
      let x = prompt("Enter X : ");
      let y = prompt("Enter Y : ");
      if (this.makeMove(x, y)) {
        if (this.checkWinner(x, y)) {
          this.activePlayer === "X"
            ? this.playAWinCount++
            : this.playBWinCount++;
          // this.reMatchText();
          // console.log(`Player ${this.activePlayer} wins!!!`);
          this.flag = true;
          break;
        } else if (this.isBoardFull()) {
          // // console.log(`Match Tie!!!`);
          // this.reMatchText();
          // console.log(`Match Tie!!!`);
          this.flag = true;
          break;
        } else {
          this.switchPlayer();
        }
      }
    }
  }

  resetGame() {
    this.board = Array(this.n)
      .fill()
      .map(() => Array(this.n).fill(" "));
    this.flag = false;
  }
}
let game = new TicTacToe(10);
game.playGame();
