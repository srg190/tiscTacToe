export class TicTacToe {
  constructor(nameA, nameB, arr, activePlayer) {
    this.nameA = nameA;
    this.nameB = nameB;
    this.arr = arr;
    this.activePlayer = activePlayer;
  }
  fillData = () => {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        this.arr[i][j] = undefined;
      }
    }
  };
  playerOne = (coordinate) => {
    const { x, y } = coordinate;
    if (this.arr[x][y] !== undefined) {
      this.arr[x][y] = 1;
    }
  };
  playerSecond = (coordinate) => {
    const { x, y } = coordinate;
    if (this.arr[x][y] !== undefined) {
      this.arr[x][y] = 0;
    }
  };
  canPut = (coordinate) => {
    const { x, y } = coordinate;
    return this.arr[x][y] === undefined;
  };
  winCheck = (coordinate) => {
    const { x, y } = coordinate;
    let p1 = 0;
    let p2 = 0;
    rowCheck = () => {
      for (let i = 0; i < 3; i++) {
        if (this.arr[x][i] === 1) {
          p1++;
        } else if (this.arr[x][i] === 0) {
          p2++;
        }
      }
    };
    columnCheck = () => {
      for (let i = 0; i < 3; i++) {
        if (this.arr[i][y] === 1) {
          p1++;
        } else if (this.arr[i][y] === 0) {
          p2++;
        }
      }
    };
    diagonal1Check = () => {
      for (let i = 0; i < 3; i++) {
        if (this.arr[i][i] === 1) {
          p1++;
        } else if (this.arr[i][i] === 0) {
          p2++;
        }
      }
    };
    diagonal2Check = () => {
      let j = 2;
      for (let i = 0; i < 3; i++) {
        if (this.arr[i][j - i] === 1) {
          p1++;
        } else if (this.arr[i][j - i] === 0) {
          p2++;
        }
      }
      return [p1, p2];
    };
  };
}
