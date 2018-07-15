const validWords = require('./data.js')

class Boggle {
    constructor() {
        this.board = this.shake(4)
        // this.dictionary = validWords
        this.dictionary = ['ADD', 'MOVE', 'EM', 'ANT', 'DEV', 'UDIN', 'NIAT', 'ADEM', 'AUNT']
    }

    shake(num) {
        let mainArr = []
        // let alphabet = 'ABCDEFGHOJKLMNOPQRSTUVWXYZ'
        let alphabet = 'ANTAUNTSTILL'
        for(let i = 0; i < num; i++) {
            let subArr = []
            for(let j = 0; j < num; j++) {
                let random = Math.floor(Math.random() * alphabet.length);
                subArr.push(alphabet[random])
            }
            mainArr.push(subArr)
        }
        return mainArr
    }

    checkDiagonal() {
        var resultArr = []
        var strWord = ''
        // var board = this.shake(4)
        var board = this.board
        for (let i = 0; i < board.length - 1; i++) {
          // debugger
          for (let j = 0; j < board[i].length - 1; j++) {
            // debugger
            if (board[i][j] !== undefined) {
              strWord += board[i][j]
              resultArr.push(strWord)
              if (board[i][j+1] !== undefined) {
                strWord += board[i][j+1]
                resultArr.push(strWord)
                // debugger
                if (board[i+1][j+1] !== undefined) {
                  strWord += board[i+1][j+1]
                  resultArr.push(strWord)
                  if (board[i+1][j+1] !== undefined) {
                    strWord += board[i+1][j]
                    resultArr.push(strWord)
                    strWord = ''
                  }
                }
              }
              if (board[i+1][j] !== undefined) {
                strWord += board[i][j] + board[i+1][j]
                resultArr.push(strWord)
                if(board[i+1][j+1] !== undefined) {
                  strWord += board[i+1][j+1]
                  resultArr.push(strWord)
                  if(board[i][j+1] !== undefined) {
                    strWord += board[i][j+1]
                    resultArr.push(strWord)
                    strWord = ''
                  }
                }
              }
            }
          }
          // strWord = ''
        }
        // return 'you find words: ' + correctArr + '   ||  total find: ' + counter
        return resultArr
      }
    
      checkVertical() {
        var board = this.board
        var str = ''
        var containArr = []
        for (let i = 0; i < board.length; i++) {
          for (let j = 0; j < board[i].length; j++) {
            str = ''
            var idx = i
            while(idx < board.length) {
              str += board[idx][j]
              idx++
            }
            containArr.push(str)
          }
        }
        return containArr
      }
    
      checkHorizontal() {
        var board = this.board
        var str = ''
        var containArr = []
        for (let i = 0; i < board.length; i++) {
          for (let j = 0; j < board[i].length; j++) {
            str = ''
            var idx = j
            while(idx < board.length) {
              str += board[i][idx]
              idx++
            }
            containArr.push(str)
          }
        }
        return containArr
      }

    wordsChecker() {
        var counter = 0
        var correctArr = this.dictionary
        var containArr = [this.checkDiagonal(), this.checkVertical(), this.checkHorizontal()]
        var resultArr = []
        // console.log(containArr);
        
        for (let i = 0; i < containArr.length; i++) {
            for (let j = 0; j < containArr[i].length; j++) {
                for (let k = 0; k < correctArr.length; k++) {
                if (containArr[i][j] === correctArr[k]) {
                    counter++
                    resultArr.push(containArr[i][j])
                    var result = 'You find the words: ' + resultArr + ' | your score is: ' + counter
                }
                }
            }
        }
        if(result === undefined) {
            return 'sorry no words find'
        }
        return result
    }


}


let gameBoggle = new Boggle()
// gameBoggle.shake(4)
console.log(gameBoggle.board);
console.log(gameBoggle.wordsChecker());
