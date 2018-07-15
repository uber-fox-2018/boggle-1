//Release 1 & 2- Simple Boggle Board (Randomise)
/* 
1. Adding shake() to randomise letters
2. The size of board can be changed dynamically OR by default 4x4
3. Importing and using longer dictionary from data.js
*/
class BoggleBoard{
    constructor(dictionary){
        this.dictionary = dictionary
        this.board= [];
        
    }

    shake(num=4) { 
        let result=[];
        let box=[];
        for(let i=0; i<num*num; i++){
            let randomChar = String.fromCharCode(Math.floor(Math.random()*25+65));
            box.push(randomChar);
            if(box.length===num){
                result.push(box);
                this.board.push(box);
                box=[];
            }
        }
        return result;
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
let kamus =["APPLE","SIT","TRIP","TURN","SUPER", "SUSAN", "NIO", "CODE", "EAT", "SLEEP"];
var dictionary = require('./data');

var boggle1 = new BoggleBoard(kamus);
var boggle2 = new BoggleBoard(dictionary);
console.log(boggle1.shake()); // to randomise the letters in boggle board 1. By default, the size is 4x4.
console.log(boggle1.boggleSolver()); //to find matching words from 'kamus'
console.log(boggle2.shake(6)); //// to randomise the letters in boggle board 2. The size can be > 4x4
console.log(boggle2.boggleSolver()); ///to find matching words from 'dictionary'. 
//NOTE: the bigger the boogle and the longer the dictionary,
//then the longer it will take to process the outputs. 

/* PSEUDOCODE
STORE CLASS BoggleBoard with
    CONSTRUCTOR with parameter “dictionary”
		SET dictionary of BoggleBoard with “dictionary”
		SET board of BoggleBoard with empty array
    END CONSTRUCTOR

    METHOD shake with parameter num:number (by default is 4)
	STORE “result” with empty array
	STORE “box” with empty array
	STORE “i” with 0
 	FOR “i” to CALCULATE num*num 
		STORE “randomChar” with CONVERT to string random character code range from 65 to 90
		PUSH “randomChar” to “box”
		IF length of “box” EQUALS num
			PUSH “box” to “result”
			PUSH “box” to board of BoggleBoard
			SET “box” with empty array
		END IF
		SET “i” with “i” + 1
	END FOR
	RETURN “result”
    END METHOD

   METHOD combineMatrixAndKamus
	STORE “strings” with empty string
	STORE “i” with 0
	FOR “i” to length of board of BoggleBoard
		STORE “j” with 0
		FOR “j” to length of board of BoggleBoard index of i
			APPEND “strings” with board[i][j] of BoggleBoard
			SET “j” with “j” + 1
		END FOR
		IF CALCULATE “i” + 1 EQUALS length of board of BoggleBoard  THEN
			APPEND “strings” with “, “
		SET “i” with “i” + 1
	END FOR
	STORE “joinedKamus” with dictionary of BoggleBoard join by nothing
	RETURN [“strings”, “joinedKamus”]
    END METHOD	

    METHOD boggleSolver
	STORE “strArr” with METHOD combineMatrixAndKamus
	STORE “matrix” with strArr index of 0 THEN split by “, “
	STORE “dictionary” with strArr index of 1 THEN split by “,“
	STORE “tidakAda” with empty array
	STORE “ada” with empty array
	
	FOR each word of “dictionary”
		IF METHOD isWordInside with parameter “matrix”: array, “word”: string is  false THEN 
			PUSH word to “tidakAda”
		ELSE 
			PUSH word to “ada”
		END IF
	END METHOD

	IF length of “ada” NOT EQUALS 0 THEN 
		STORE “sum” with length of “ada”
		DISPLAY `${sum} words found:`
		FOR	each kata of ada
			DISPLAY kata
		END FOR
	ELSE 
		DISPLAY “Tidak ditemukan kata yang sama”
	END IF
    END METHOD

   METHOD isWordInside with parameter matrix: array, word:string
	STORE “i” with 0
	FOR “i” to length of matrix
		STORE “j” with 0
		FOR “j” to length of matrix index of “i”
			STORE “matrix2” with array of letters from each word of matrix
			IF METHOD isWordAt with parameter matrix2: array, word:string, i:number, j:number is true THEN
				return true
			END IF
			SET “j” with “j” + 1
		END FOR
		SET “i” with “i” + 1
	END FOR
	RETURN false
    END METHOD

   METHOD isWordAt with parameter matrix:array, word:string, i:number, j:number
	IF length of word EQUALS 0 THEN 
		RETURN true
	END IF

	IF “i” < 0 OR “j” < 0 OR “i” > length of matrix min 1 OR “j” > matrix[0].length min 1 THEN
		RETURN false
	END IF

	IF matrix[i][j] NOT EQUALS word[0] THEN
		RETURN FALSE
	END IF

	SET matrix[i][j] with “#”

	IF METHOD isWordAt with parameter matrix:array, word.slice(1):string, i+1:number, j:number OR
	   METHOD isWordAt with parameter matrix:array, word.slice(1):string, i-1:number, j:number OR
       METHOD isWordAt with parameter matrix:array, word.slice(1):string, i:number, j+1:number OR
	   METHOD isWordAt with parameter matrix:array, word.slice(1):string, i:number, j-1:number OR
	   METHOD isWordAt with parameter matrix:array, word.slice(1):string, i+1:number, j-1:number OR
	   METHOD isWordAt with parameter matrix:array, word.slice(1):string, i+1:number, j+1:number OR
	   METHOD isWordAt with parameter matrix:array, word.slice(1):string, i-1:number, j-1:number OR
	   METHOD isWordAt with parameter matrix:array, word.slice(1):string, i-1:number, j+1:number THEN
	    RETURN true
	ELSE
		RETURN false
	END IF
    END METHOD
END CLASS

STORE “kamus” with ["APPLE","SIT","TRIP","TURN","SUPER", "SUSAN", "NIO", "CODE", "EAT", "SLEEP"]
STORE “dictionary” with IMPORTS words from data.js
STORE “boggle1” with new BoggleBoard with parameter kamus:array
DISPLAY METHOD shake with parameter num:number  
DISPLAY METHOD boggleSolver 
*/