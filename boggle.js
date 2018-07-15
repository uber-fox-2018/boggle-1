// Release 0 : 

class Boggle {
    constructor() {
        this.usedCoordinate = []
    }

    shake(size) {
        var board = []
        let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        for (let i = 0; i < size; i++) {
            let abjad = []
            for (let j = 0; j < size; j++) {
                abjad.push(alphabet[Math.trunc(Math.random()*alphabet.length)])
            }
            board.push(abjad)
        }
        return board
    }

    printBoard(board) {
        let printBoard = ''
        let printLine = ''
        let printBorder = ''

        for (let i = 0; i < board.length; i++) {
            for(let j = 0; j < board.length; j++) {
                printLine += `| ${board[i][j]} `
                printBorder += "----"
            }

            printLine += '|'
            printBorder += '-'
            printBoard += printBorder+'\n'+printLine+'\n'

            if (i === board.length-1) {
                printBoard += printBorder
            }

            printBorder = ''
            printLine = ''
     
        }
        console.log(printBoard)
    }

    // release 1 check string kalo ada di board atau gak
    // return true kalo ada false kalo kaga
    findString(str, board) {
        let firstAlpha = ''
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                let currentCoordinate = [i,j]
                firstAlpha = board[i][j]
                this.usedCoordinate = []

                if (this.runCheck(currentCoordinate, firstAlpha, str, board) === true) {
                    return true
                }
            }
        }
        return false
    }

    runCheck(coordinate, firstAlphaStr, str, board) {
        let boardSize = board.length
        if(str.indexOf(firstAlphaStr) === 0 && firstAlphaStr !== str) {
            this.usedCoordinate.push(coordinate)
            //do check for every direction that represented by number
            // → = 1 , ↘ = 2 , ↓ = 3, ↙ = 4 , ← = 5, ↖ = 6, ↑ = 7, ↗ = 8

            for (let direction = 1; direction <= 8; direction++) {
                let newCoordinate = this.checkCoordinate(coordinate, direction, boardSize)
                if (newCoordinate !== false) {
                    let row = newCoordinate[0]
                    let col = newCoordinate[1]
                    firstAlphaStr += board[row][col]

                    if (this.runCheck(newCoordinate, firstAlphaStr, str, board) === true) {
                        return true
                    } else {
                        firstAlphaStr = firstAlphaStr.slice(0,firstAlphaStr.length-1) //remove last added char using slice
                    }
                }
            }  
            this.usedCoordinate.pop()      
        } else if (firstAlphaStr === str) { // check if string found in board
            return true
        } else {
            return false // if not found
        }
    }

    // to get new coordinate based on direction for nex check
    checkCoordinate(coordinate, direction, boardSize) {
        let newRow = coordinate[0]
        let newCol = coordinate[1]
        switch (direction) {
            case 1:
              newCol += 1;
              break;
            case 2:
              newRow += 1;
              newCol += 1;
              break;
            case 3:
              newRow += 1;
              break;
            case 4:
              newRow += 1;
              newCol -= 1;
              break;
            case 5:
              newCol -= 1;
              break;
            case 6:
              newRow -= 1;
              newCol -= 1;
              break;
            case 7:
              newRow -= 1;
              break;
            case 8:
              newRow -= 1;
              newCol += 1;
              break;            
            default:
              break;
        }

        let newCoordinate = [newRow, newCol]
        if (newRow < 0 || newRow >= boardSize || newCol < 0 || newCol >= boardSize || newCoordinate.includes(newCoordinate, this.usedCoordinate) === true) {
            return false
        } else {
            return newCoordinate
        }
    }

     // release 2 to find all dictionary that consist in the board
     findAllString(dictionary, board) {
        let isFound = false;
        for (let i = 0 ; i < dictionary.length ; i++) {
          if (this.findString(dictionary[i],board) === true) {
            console.log ("found string",dictionary[i]);
            isFound = true;
          } 
        }
        if (isFound === false) {
          console.log("gada kata2 dictionary di board");
        }
    }
}

// Release 0: input random alphabet ke board
var game = new Boggle()
// console.log(game.shake(4))
console.log(`===== RELEASE 0 =====`)
let randomAlphaBoard = game.shake(4)
game.printBoard(randomAlphaBoard)

// Release 1
let sampleBoard = [
    ['D', 'G', 'H', 'I'],
    ['K', 'L', 'P', 'S'],
    ['Y', 'E', 'U', 'T'],
    ['E', 'O', 'R', 'N']
]

console.log(`===== RELEASE 1 =====`)
game.printBoard(sampleBoard)
console.log("TURN", game.findString("TURN",sampleBoard));
console.log("SUPER",game.findString("SUPER",sampleBoard));
console.log("APPLE",game.findString("APPLE",sampleBoard));
console.log("PUPI",game.findString("PUPI",sampleBoard));
console.log("")

 //RELEASE 2 cari kata2 dari sample
 let sampleDictionary = ['APPLE','SIT','TRIP','TURN','SUPER'];
 console.log("RELEASE 2 TEST WITH SAMPLE DICTIONARY")
 game.printBoard(sampleBoard);
 game.findAllString(sampleDictionary,sampleBoard);
 console.log("")
 
 // RELEASE 2 cari kata kata yg dari data.js
 let importedDictionary = require('./data.js');
 console.log("RELEASE 2 TEST WITH IMPORTED DICTIONARY")
 game.printBoard(sampleBoard);
 game.findAllString(importedDictionary,sampleBoard);