class BoggleBoard {
  constructor(){
    // this.alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    // this.dictionary = require('./data');
    this.alphabets = 'AIUEOBDFG'
    this.dictionary = [
      'BIGGOD',
      'BADDOG',
      'FADED'
    ]
    this.mainBoard = null
    this.lettersPos = {} // objOfArr
    this.linedCoordinates = {}//objOfArr
    this.triedCoordinates = [] // arrOfArr
  }

  shake(number){
    let mainBoard = [];
    for (let i = 0; i < number; i++){
      let row = [];
      for (let i = 0; i < number; i++){
        let randomIndex = Math.floor(Math.random() * this.alphabets.length);
        row.push(this.alphabets[randomIndex]);
      }
      mainBoard.push(row);
    }
    this.mainBoard = mainBoard;
    console.log (this.mainBoard);
  }

  isThereTheWord(){
    let boardStr = '';
    for(let i in this.mainBoard){
      for (let j in this.mainBoard[i]){
        boardStr += this.mainBoard[i][j];
      }
    }

    for (let i in this.dictionary){
      let letterCount = 0;
      for (let j in this.dictionary[i]){
        let isLetterFound = false;
        for (let k in boardStr){
          if (this.dictionary[i][j] === boardStr[k]){
            isLetterFound = true;
          }
        }
        if (isLetterFound){
          letterCount ++;
        }
      }
      if (letterCount === this.dictionary[i].length){
        return true;
      }
    }

    return false;
  }

  putTheIndexes(){
    for (let i in this.dictionary){
      for(let j in this.dictionary[i]){
        for (let k in this.mainBoard){
          for (let l in this.mainBoard[k]){
            if (this.dictionary[i][j] === this.mainBoard[k][l]){
              if (!this.lettersPos[this.dictionary[i][j]]){
                this.lettersPos[this.dictionary[i][j]] = [[k,l]];
              } else {
                this.lettersPos[this.dictionary[i][j]].push([k,l]);
              }
            }
          }
        }
      }
    }
  }

  areIndexesViable (index1, index2){
    if(index1[0] === index2[0] - 1 && index1[1] === index2[1] - 1){
      return true;
    } else if(index1[0] === index2[0] - 1 && index1[1] === index2[1]){
      return true;
    } else if(index1[0] === index2[0] - 1 && index1[1] === index2[1] + 1){
      return true;
    } else if(index1[0] === index2[0] && index1[1] === index2[1] + 1){
      return true;
    } else if(index1[0] === index2[0] + 1 && index1[1] === index2[1] + 1){
      return true;
    } else if(index1[0] === index2[0] + 1 && index1[1] === index2[1]){
      return true;
    } else if(index1[0] === index2[0] + 1 && index1[1] === index2[1] - 1){
      return true;
    } else if(index1[0] === index2[0] && index1[1] === index2[1] - 1){
      return true;
    } else {
      return false
    }
  }

  isThisTried (index){
    for (let i in this.triedCoordinates){
      if (this.triedCoordinates[i][0] === index[0] && this.triedCoordinates[i][1] === index[1]){
        return true;
      }
    }
    return false;
  }

  solve(){
    if(this.isThereTheWord()){
      this.putTheIndexes();

      for(let i = 0; i < this.dictionary.length; i++){
        this.linedCoordinates[this.dictionary[i]] = [];
        
        for (let j = 0; j < this.dictionary[i].length - 1; j++){
          
          for (let k = 0; k < this.lettersPos[this.dictionary[i][j]].length; k++){
            if (!this.isThisTried(this.lettersPos[this.dictionary[i][j]][k])){
              let isThisTwoLinedUp = false;
              this.triedCoordinates.push(this.lettersPos[this.dictionary[i][j]][k]);

              for (let l = 0; l < this.lettersPos[this.dictionary[i][j + 1]].length; l++){
                if (!this.isThisTried(this.lettersPos[this.dictionary[i][j + 1]][l])){
                  if (this.areIndexesViable(this.lettersPos[this.dictionary[i][j]][k], this.lettersPos[this.dictionary[i][j + 1]][l])){
                    isThisTwoLinedUp = true;
                    this.linedCoordinates[this.dictionary[i]].push(this.lettersPos[this.dictionary[i][j]][k]);
                    
                    let isThisAlreadyPushed = false;
                    for (let m in this.linedCoordinates){
                      if (this.lettersPos[this.dictionary[i][j + 1]][l][0] === this.linedCoordinates[m][0] && this.lettersPos[this.dictionary[i][j + 1]][l][1] === this.linedCoordinates[m][1]) {
                        isThisAlreadyPushed = true;
                      }
                    }
                    if (!isThisAlreadyPushed){
                      this.linedCoordinates[this.dictionary[i]].push(this.lettersPos[this.dictionary[i][j + 1]][l]);
                    }

                    if(this.linedCoordinates[this.dictionary[i]].length === this.dictionary[i].length){
                      j = 0;
                      k = 0;
                      l = 0;
                      i++;
                    }

                    k = 0;
                    l = 0;
                    j++;
                  }
                }
              }

              if (!isThisTwoLinedUp){
                this.triedCoordinates.pop();
              }
            }
          }
        }
      }

      console.log(this.linedCoordinates)
      console.log(this.triedCoordinates)
    } else {
      console.log('Not a single word found')
    }
  }

}

// let theBoard = BoggleBoard.shake(4);
// console.log(theBoard)

var board = new BoggleBoard()
board.shake(5)
board.solve()

