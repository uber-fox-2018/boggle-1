//Release 0 - Simple Boggle Board (Manual)
//NOTE: for release 1 & 2, please refer to boggleRandom.js
class BoggleBoard{
    constructor(dictionary){
        this.dictionary = dictionary
        this.board= [['D','G','H','I'],
                   ['K','L','P','S'],
                   ['Y','E','U','T'],
                   ['E','O','R','N']];
      
    }

    combineMatrixAndKamus(){
        let strings="";
        for(let i=0 ; i<this.board.length; i++){
            for(let j=0 ; j<this.board[i].length; j++){
                strings += this.board[i][j];
            }
            if(i+1!=this.board.length){
            strings += ", " ;
            }
        }
        let joinedKamus = this.dictionary.join();
        return [strings,joinedKamus];
    }

    boggleSolver(){
        let strArr = this.combineMatrixAndKamus();
        let matrix = strArr[0].split(', ');
        let dictionary = strArr[1].split(',');
        let tidakAda = [];
        let ada=[];
     
        for (let word of dictionary) {
            if(!this.isWordInside(matrix, word)) {
                tidakAda.push(word);
            }else{
                ada.push(word);
            }
        }

        if(ada.length !== 0) {
            let sum = ada.length;
            console.log(`${sum} words found:`);
            for(var kata of ada){
                console.log(kata);
            }
        } else {
            console.log("Tidak ditemukan kata yang sama");
        }
    }

    isWordInside(matrix, word) {
        for(let i = 0; i < matrix.length; i++) {
            for(let j = 0; j < matrix[i].length; j++) {
                var matrix2 = matrix.map(a=>[...a]);
                if(this.isWordAt(matrix2, word, i, j)) return true;
            }
        } 
        return false;
    }
    
    isWordAt(matrix, word, i, j) {
        if(word.length === 0) return true;
        if(i < 0 || j < 0 || i > matrix.length - 1 || j > matrix[0].length - 1) return false;
        if(matrix[i][j] !== word[0]) return false;
        matrix[i][j] = "#";
        if(this.isWordAt(matrix, word.slice(1), i + 1, j) ||
         this.isWordAt(matrix, word.slice(1), i - 1, j) ||
         this.isWordAt(matrix, word.slice(1), i, j + 1) ||
         this.isWordAt(matrix, word.slice(1), i, j - 1) ||
         this.isWordAt(matrix, word.slice(1), i + 1, j - 1) ||
         this.isWordAt(matrix, word.slice(1), i + 1, j + 1) ||
         this.isWordAt(matrix, word.slice(1), i - 1, j - 1) ||
         this.isWordAt(matrix, word.slice(1), i - 1, j + 1) 
        ) {
            return true;  
        } else {
            return false;
        }
    }
}
let kamus =["APPLE","SIT","TRIP","TURN","SUPER"];
var boggleManual = new BoggleBoard(kamus);
console.log(boggleManual.boggleSolver());
/* OUTPUTS:
2 words found:
TURN
SUPER
*/
