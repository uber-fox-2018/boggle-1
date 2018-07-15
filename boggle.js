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
        console.log(`====== RELEASE 0 =========`)
        console.log(printBoard)
    }

}


// Release 0: input random alphabet ke board
var game = new Boggle()
// console.log(game.shake(4))
let randomAlphaBoard = game.shake(4)
game.printBoard(randomAlphaBoard)