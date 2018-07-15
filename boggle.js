const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const randomWordOfBoard = 'DGHIKLPSYEUTEORN'

class Boggle {
    constructor(){
        
    }
    
    
    board(){
        let emptyBoard = []
        let sizeBoard = 4
        let indexRandWOrd = 0
        
        for(let a=0; a<sizeBoard; a++){
            emptyBoard.push([])
            for(let b=0; b<sizeBoard; b++){
                emptyBoard[a].push(randomWordOfBoard[indexRandWOrd]) ;indexRandWOrd++
            }
        }
        return emptyBoard
    }
    
    slove(){
        let solveBoard = this.board()
        // console.log(solveBoard);
        let indexInWord
        var countIndex = 0;

        for(let a=0; a<solveBoard.length; a++){
            let resultWord = []
            for(let b=0; b<solveBoard[a].length; b++){
                let temptWord = ''
                let tempWord = solveBoard[a][b]
                let posiition = [a,b]
                // for(let c=0; c<this.dictonary().length; c++)
                // console.log(resultWord)
            }
            for(let c=0; c<resultWord.length;c++){
                console.log(resultWord)
            }
        }
    }

    dictonary(){
        const word = [`TURN`, `SUPER`]
        return word
    }
}


var game = new Boggle()

console.log(game.board())
console.log(game.dictonary());
console.log(game.slove());