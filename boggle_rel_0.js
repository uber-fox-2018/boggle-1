"use strict"

class BoggleBoard {
    constructor(){
        this.board= []
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
}

var game= new BoggleBoard()
game.shake(4)
console.log(game.board)
