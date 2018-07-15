class Boggle {
    constructor(dictionary){
        this.dictionary = dictionary
        this.foundWord = []
    }


    solve(){
        var displayBoard = this.board()
        var dictionary   = this.dictionary
        // console.log(displayBoard)
        
        var idxLook = 0
        var counter = 0

        for(let i = 0; i < displayBoard.length; i++){
            var matchWord = []
            for(let j = 0; j < displayBoard[i].length; j++){
                var lockWord = ''
                var wordInBoard = displayBoard[i][j]
                var position = [i,j]
                // console.log(wordInBoard)
                
                for(let k = 0; k < dictionary.length ; k++){
                    if(dictionary[k][0] === wordInBoard){
                        matchWord.push(dictionary[k])
                        // console.log(matchWord)
                    }
                } 

                for(let l = 0; l < matchWord.length; l++){
                    if(matchWord[l][0] === wordInBoard){
                        lockWord = matchWord[l]
                        // console.log(lockWord)

                        var counterLockWord = 0
                        var limCounter = lockWord.length-1
                        // console.log(lockWord.length)
                        // console.log(limCounter)

                        var record = []
                        // console.log(position)

                        for(let m = 0; m < lockWord.length; m++){
                            var nextLetter = this.coordinate(...position, displayBoard)
                            // console.log(nextLetter)
                            for(let n = 0;  n <  nextLetter.length ; n++){
                                
                                if(lockWord[m]===nextLetter[n][0]){
                                    // console.log(nextLetter[n][0])
                                    record.push(nextLetter[n][1]+nextLetter[n][2])
                                    position = [Number(nextLetter[n][1]), Number(nextLetter[n][2])]
                                    // console.log(position)
                                    counterLockWord += 1;
                                    break;
                                    
                                }
                            }//end looping nextLetter
                            //console.log(counterLockWord)
                            //console.log(limCounter)
                            if(counterLockWord === limCounter){
                                this.foundWord.push(lockWord);
                            }
                        } // end loop lockWord

                    }
                } // end loop matchWord

            } // end loop length per row displayBoard
        } // end loop length displayWord

        return this.foundWord

    }

    coordinate(row, col, board){
        let result = []
        let thisBoard = board
        var x = row-1
        var y = col-1
        
        var lastI = row + 2
        var lastJ = col + 2
        
        
        
        for(let i = x; i < lastI; i++){
            for(let j = y; j < lastJ; j++){
            if(thisBoard[i] && thisBoard[i][j]){
                if(i !== row || j !== col){
                result.push(thisBoard[i][j]+i+j)
                }
            }
            }
        }  
        
        return result
    }

    board(){
        
        let inputBoard = 'DGHIKLPSYEUTEORN'
        let boardSize = 4
        let counter = 0
        let displayBoard = []

        for(let i = 0; i < boardSize; i++){
            let temp = []
            for(let j = 0; j < boardSize; j++){
                temp.push(inputBoard[counter])
                counter++
            }
            displayBoard.push(temp)
        }

        return displayBoard
        /*
            [ [ 'D', 'G', 'H', 'I' ],  
              [ 'K', 'L', 'P', 'S' ],  
              [ 'Y', 'E', 'U', 'T' ],
              [ 'E', 'O', 'R', 'N' ] ]
        */
    }


}

var dictionary = ['APPLE','DEAD','SIT','TURN','SUPER']

var game = new Boggle(dictionary)

console.log(game.solve())