'use strict'
class Boggle {
    constructor() {
      this.alpha = alphaString
      this.dictionary = dataDictionary
    }
  
    randomAlpha(){
      let alpha = this.alpha
      return alpha.charAt(Math.floor(Math.random() * alpha.length))
    }
  
    board(width, hight){
      let arrBoard = []
      for(let i=0; i<hight; i++){
        arrBoard.push([]);
        for(let j=0; j<width; j++){
          arrBoard[i].push(this.randomAlpha())
        }
      }
      return arrBoard
    }
  }
  
  let alphaString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var fs = require('fs')
  var dataDictionary = fs.readFileSync('data.js')
    .toString()
    .split("\n")[0]
  let game = new Boggle(alphaString)
  
  
  console.log(game.board(4,4));