"use strict";

let coordinate = [
  [1, 0],
  [1, 1],
  [0, 1],
  [-1, 1],
  [-1, 0],
  [-1, -1],
  [0, -1],
  [1, -1]
];

class Boggle {
  constructor(coord, words) {
    this._num = 4;
    this._board = this.board(this._num);
    this._coord = coord;
    this._words = words;
  }

  board(num) {
    let abc = "AAABBBAAADDIII";
    let box = [];
    for (let i = 0; i < num; i++) {
      box.push([]);
      for (let j = 0; j < num; j++) {
        box[i].push(abc[Math.ceil(Math.random() * 13)]);
      }
    }
    return box;
  }

  solver() {
    let words = this._words;
    let result = "";
    let counter = 0;
    for (let i = 0; i < words.length; i++) {
      let tmp = [];
      for (let k = 0; k < words[i].length - 1; k++) {
        tmp.push(this.checkword(words[i][k]));
      }
      if (this.matcher(words[i][0], this.marker(tmp), words[i]) == words[i]) {
        result += this.matcher(words[i][0], this.marker(tmp), words[i]) + " ";
        counter++;
      }
    }
    return `Result is/are ${counter} Words of = ${result}`;
  }

  marker(mark) {
    let result = [];
    for (let i = 0; i < mark.length; i++) {
      let tmp = [];
      let board = {};
      for (let k = 0; k < mark[i].length; k++) {
        if (board[mark[i][k]] === undefined) {
          board[mark[i][k]] = "a";
          tmp.push(mark[i][k]);
        }
      }
      result.push(tmp);
    }
    return result;
  }

  matcher(firstWord, string, fullWord) {
    let result = "";
    result += firstWord;

    for (let i = 0; i < string.length; i++) {
      for (let k = 0; k < string[i].length; k++) {
        if (fullWord[i + 1] == string[i][k]) {
          result += fullWord[i + 1];
        }
      }
    }
    return result;
  }

  checkword(word) {
    let board = this._board;
    let arah = this._coord;
    let result = [];

    for (let i = 0; i < board.length; i++) {
      for (let k = 0; k < board[i].length; k++) {
        if (board[i][k] == word) {
          for (let l = 0; l < arah.length; l++) {
            if (board[i - arah[l][0]] != undefined)
              result.push(board[i - arah[l][0]][k - arah[l][1]]);
          }
        }
      }
    }
    return result;
  }
}

let data = ["ABA", "ABAD", "ABADI"];
let boggle = new Boggle(coordinate, data);
console.log(boggle._board);
console.log(boggle.solver());
