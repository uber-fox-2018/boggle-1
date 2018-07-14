class Boogle {
  constructor(dataInput, shake) {
    this.dataInput = dataInput
    this.shake = shake
    this.huruf = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  }

  solve() { 

    //  left true ?
    function isLeftAvailable(){

    }

    //  right true ?
    function isRightAvailable(){

    }

    //  top true ?
    function isTopAvailable(){

    }

    //  bottom true ?
    function isBottomAvailable(){

    }

    //  top-left true ?
    function isTopLeftAvailable(){

    }

    //  top-rigt true ?
    function isTopRightAvailable(){
      
    }

    //  bottom-left true ?
    function isBottomLeftAvailable(){

    }

    //  bottom-right true ?
    function isBottomRightAvailable(){

    }
  }
  
  //  create board
  board() {
    var randomBoard = []
    for (let i = 0 ; i < shake ; i++){
      let temp = []
      for (let j = 0 ; j < shake ; j++){
        //  create board 4x4 with random alphabet 
        temp.push(this.huruf[(Math.floor(Math.random()*25))])
      }
      //  save random alphabet to board4x4
      randomBoard.push(temp)
    }

    this.findPosition(randomBoard)
  }

  //  find the position to be generate
  findPosition(randomBoard){
    for (let i = 0 ; i < dataInput.length ; i++){
      for (let j = 0 ; j < randomBoard.length ; j++){
        for (let k = 0 ; k < randomBoard[j].length ; k++){
          //  check data if available on random board
          if (dataInput[i][1] === randomBoard[j][k]){
            //  available or not (condition)
          }
        }
      }
    }
  }
}

const fs = require('fs')
const dataInput = require('./data')

const shake = 4

var boogie = new Boogle(dataInput,shake)

boogie.board(shake)
