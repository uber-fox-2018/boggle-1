"use strict"

class BoggleBoard {
    constructor(target_str){
        this.board= []
        target_str= target_str
        
    }

    // Buat board & 'lempar' ke properties
    shake(num) { 
        for (let i=0; i<num; i++) {
            let line= []
            let alphabet= 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

            for (let j=0; j<num; j++) {
                let idx= Math.floor(Math.random() * 26)         // returns a random integer from 0 to 25
                line.push(alphabet[idx])  
            }
            this.board.push(line)  
        }
    }

    //Coba cari 'kata'nya
    solve(){
        console.log(this.board)
        //console.log(target_str)
        var resultBoggle = []
  
        for(var urut=0; urut<target_str.length; urut++){

            for(let i=0; i<this.board.length; i++){
                var board = this.board

                for(let j=0; j<this.board.length; j++){
                    if(board[i][j] === target_str[urut][0]){

                        var X= i
                        var Y= j
                        board[i][j]= ' '
                        var remain = target_str[urut].slice(1)
                        //console.log(remain)
                        var output = this.crossCheck(X,Y,remain)

                        if(output === true){
                            board[i][j] = target_str[urut][0]
                            resultBoggle.push(target_str[urut])
                            break
                        }
                        else if(output === false){
                            board[X][Y] = target_str[urut][0]
                        }
                    }
                }
                if(output === true){
                    board = this.board
                    break
                }
            }
        }
        //console.log(resultBoggle)
        if(resultBoggle.length>0){
            console.log(resultBoggle.length +  ' found: ')
            for(let i=0;i<resultBoggle.length;i++){
                //console.log(resultBoggle[i])
            }
        } else {
            console.log('Boggle: no words!')
        }
    }   

    crossCheck(X, Y, remain){
        var board= this.board
        let minX= X-1
        let maxX= X+1
        let minY= Y-1
        let maxY= Y+1
        let word= remain
      
        if (remain.length>0){
          if(minX<0){
            minX= X
          }
          else if (maxX>board.length-1){
            maxX= X
          }
          if (minY<0){
            minY= Y
          }
          else if (maxY>board.length-1){
            maxY= Y
          }
      
          for (let i=minX; i<=maxX; i++) {
            for (let j=minY; j<=maxY; j++) {
      
                if(remain[0] === board[i][j]){
                  let X = i
                  let Y = j
                  board[i][j] = ' '
                  let remain = word.slice(1)
                  let output = this.crossCheck(X,Y,remain)
      
                  if(output === true){
                    board[X][Y] = word[0]
                    return true
                  }
                  else if(output === false){
                    board[i][j] = words[0]
                  }
                }
            }
          }
        } else {        
          return true
        }

        return false
    }

}


var fs = require('fs')
var target_str = fs.readFileSync('data.js')
  .toString()
  .split("\n")[0]


// EXECUTION //
var game= new BoggleBoard()
game.shake(10)
game.solve()
//console.log(game.board)
//console.log(target_str)