"use strict"

class Boggle {
    constructor(kamus){
        this.kamus = kamus
        this.boards = [
                        ['Z','F','R','Q','Y'],
                        ['X','D','G','O','S'],
                        ['K','I','C','I','L'],
                        ['N','L','P','E','E'],
                        ['S','S','R','T','W'],
                      ]
    }

    solve(){
        
    }

    
}

var words = ['APPLE', 'MANGO', 'SLEEP', 'DICE', 'TEST']

var game = new Boggle(words)

console.log(game.solve())