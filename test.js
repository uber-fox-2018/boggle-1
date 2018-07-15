class Boggle{
        constructor(){
            this.name = 'boggle';
            this.foundWord = [];
            this.recordOFWord = [];
    
        }
    
        randomNumber(lim){
            var chooseAlp = Math.floor(Math.random()*lim);
            return chooseAlp;
        }
        
        board(){
            var blankBoard = [];
            var sizeBoard = 4;
            var alp = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
            var dummyAlp = 'DGHIKLPSYEUTEORN'
            var indxDum = 0;
            
            for(let a = 0; a < sizeBoard; a++){
                blankBoard.push([])
                for(let b = 0; b < sizeBoard; b++ ){
                    //blankBoard[a].push(alp[this.randomNumber(25)])
                    blankBoard[a].push(dummyAlp[indxDum]); indxDum++;
                }
            }//end for a
            return blankBoard;
            
        }
    
        solve(){
            var solveBoard = this.board();
            
            var indxLoockWord = 0
            var counter = 0; 
            
            
            for(let a = 0; a < solveBoard.length; a++){
                var collectLockWord = []; 
                for(let b = 0; b < solveBoard[a].length; b++){
                    var lockWord = '';
                    var tempLetter = solveBoard[a][b]
                    var position = [a, b]
                    console.log(tempLetter)
    
                    //isi collectLockWords
                    for(let f = 0; f < this.kamus().length ; f++){
                        if(this.kamus()[f][0] === tempLetter){
                            collectLockWord.push(this.kamus()[f])       
                        }
                    }

                    // console.log(collectLockWord)
                    
                    
                    //loop collectLockWord
                    for(let c=0; c<collectLockWord.length; c++){
                        // console.log(collectLockWord)
                        
                        if(collectLockWord[c][0]===tempLetter){
    
                            lockWord = collectLockWord[c]; 
                            // console.log(lockWord)
                            var counterLockWord = 0;
                            var limCOunterLockWord = lockWord.length-1;
                            // console.log(lockWord.length)
                            var record = [];
                            console.log(position)
                            for(let d = 0; d < lockWord.length; d++){
                                var theNextLetter = this.radius(...position, solveBoard);
                                // console.log(lockWord[d])
                                // console.log(theNextLetter)
                                for(let e = 0;  e <  theNextLetter.length ; e++){
                                    //jika ya update position dan check di radiusnya
                                    //jika tidak sama maka keluar d-1 atau pake while, jadi selama counterLockWord < lim;
                                    if(lockWord[d]===theNextLetter[e][0]){
                                        // console.log(theNextLetter[e][0])
                                        record.push(theNextLetter[e][1]+theNextLetter[e][2])
                                        position = [Number(theNextLetter[e][1]), Number(theNextLetter[e][2])]
                                        // console.log(position)
                                        counterLockWord += 1;
                                        break;
                                        
                                    }
                                }//end looping theNextLetter
                                //console.log(counterLockWord)
                                //console.log(limCOunterLockWord)
                                if(counterLockWord === limCOunterLockWord){
                                    this.foundWord.push(lockWord);
                                }
                            }//end looping lockword 
                            //selamahuruf di radius memenuhi kebutuhan hurufnya counter++, record position, update position, lakukan pengecekan kembali 
                            //jika tidak maka lanjutkan ke kata berikutnya, posisi tidak terupdate sebelumnya
                        }
                    
                        
                    }
                    
                    
    
                }//end let b - for
               
            }//end let a - for
    
            
            return this.foundWord;
        };
        
    
        radius(row, col, board){
            let result = [];
            let thisBoard = board;
            var i = row-1;
            var j = col-1;
            
            var endI = row + 2;
            var endJ = col + 2;
            
            
            
            for(let a = i; a < endI; a++){
              for(let b = j; b < endJ; b++){
                if(thisBoard[a] && thisBoard[a][b]){
                  if(a !== row || b !== col){
                  result.push(thisBoard[a][b]+a+b)
                  }
                }
              }
            }  
            
            return result; 
        };
    
        recordStep(){}
    
        backTrack(){}
        
        kamus(){
            var keyWord = ['APPLE','DEAD','SIT','TURN','SUPER']
            return  keyWord;
        }
    
        
    }
    
    
    //driver code
    var game = new Boggle();
    
    // console.log(game.radius( 0, 0, game.board()))
    // console.log(game.board())
    console.log(game.solve())
    // console.log(game) 