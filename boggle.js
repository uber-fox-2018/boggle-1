var word = require('./data.js')


class Boggle{
    constructor(param){
        this.board = this.wordShake(param)
    }

    wordShake(num){
        var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        var mainArr = []    //mebuat cols dari array utama
        
        for(var i = 0; i < num; i++){
            var childArr = []   //memcd buat array utama
            for(var j = 0; j < num; j++){
                childArr.push(alphabet[Math.floor(Math.random()*alphabet.length)])
            }
            mainArr.push(childArr)
           }
    
        return mainArr
      
    }

   
    collectWordFromBoard(){
        var allWords = []
        var matchWords = []
        var count = 0
        var wordCols = this.wordCols()
        var wordRows = this.wordRows()
        var wordInBoxes =  this.wordinBoxes()
        allWords.push(wordCols)
        allWords.push(wordRows)
        allWords.push(wordInBoxes)
        
        for(var i = 0; i < allWords.length; i++){
            for(var j = 0; j < allWords[i].length; j++){
                for(var k = 0; k < word.length;k++){
                    if(allWords[i][j] === word[k]){
                        matchWords.push(allWords[i][j])
                        count++
                    }
                }
            }
        }
        
        if(count === 0){
            return 'tidak ada kata ditemukan'
        }else{
            return count+' kata telah ditemukan, yaitu '+matchWords
        }
    }


    wordCols(){
        var wordsInCols = []
        for(var i = 0; i < this.board.length; i++){
            for(var j = 0; j< this.board[i].length; j++){
                var index = j
                var words = ''
                while(index < this.board.length){
                    words += this.board[i][index]
                    index++
                }
    
                if(words.length !== 1){
                    wordsInCols.push(words)
    
                }
            }
        }
        return wordsInCols
    }

    wordRows(){
        var wordsInRows = []
        for(var i = 0; i < this.board.length;i++){
            for(var j = 0; j < this.board[i].length; j++){
                var index = i
                var words = ''
                while(index < this.board.length){
                    words += this.board[index][j]
                    index++
                }
                if(words.length !== 1){
                    wordsInRows.push(words)
                }
            }
        }
        return wordsInRows
    }


    wordinBoxes(){
        var wordInBoxes = []
        var words = ''
        for(var i = 0; i < this.board.length-1; i++){
            for(var j = 0; j < this.board[i].length-1; j++){


                //def 3 words
                if(this.board[i][j+1] !== undefined){
                    if(this.board[i+1][j+1] !== undefined){
                        words += this.board[i][j]
                        words += this.board[i][j+1]
                        words += this.board[i+1][j+1]
                        wordInBoxes.push(words)
                        words = ''
                    }
                }

                if(this.board[i+1][j] !== undefined){
                    if(this.board[i+1][j+1] !== undefined){
                        words += this.board[i][j]
                        words += this.board[i+1][j]
                        words += this.board[i+1][j+1]
                        wordInBoxes.push(words)
                        words = ''
                    }
                }

                if(this.board[i+1][j+1] !== undefined){
                    if(this.board[i][j+1] !== undefined){
                        words += this.board[i][j]
                        words += this.board[i+1][j+1]
                        words += this.board[i][j+1]
                        wordInBoxes.push(words)
                        words = ''
                    }

                    if(this.board[i+1][j] !== undefined){
                        words += this.board[i][j]
                        words += this.board[i+1][j+1]
                        words += this.board[i+1][j]
                        wordInBoxes.push(words)
                        words = ''
                    }

                    //def 4 words
                    if(this.board[i][j+1] !== undefined){
                        if(this.board[i+1][j+1] !== undefined){
                            if(this.board[i+1][j] !== undefined){
                                words += this.board[i][j]
                                words += this.board[i][j+1]
                                words += this.board[i+1][j+1]
                                words += this.board[i+1][j]
                                wordInBoxes.push(words)
                                words = ''
                            }
                        }
                    }

                    if(this.board[i+1][j] !== undefined){
                        if(this.board[i+1][j+1] !== undefined){
                            if(this.board[i][j+1] !== undefined){
                                words += this.board[i][j]
                                words += this.board[i+1][j]
                                words += this.board[i+1][j+1]
                                words += this.board[i][j+1]
                                wordInBoxes.push(words)
                                words = ''
                            }
                        }
                    }

                }


            }
            
            
        }
        return wordInBoxes
        // return this.board

    }







}

var boggle = new Boggle(4)

console.log(boggle.board)
console.log(boggle.collectWordFromBoard());


