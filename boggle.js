class BoogleBoard {
    
    constructor() {
        
    }
  
    shake(number) {
        let board = [];
  
        for (let i = 0; i < number; i++) {
            board[i] = [];
            board[i].push(String.fromCodePoint(Math.floor(Math.random() * 26) + 65));
            board[i].push(String.fromCodePoint(Math.floor(Math.random() * 26) + 65));
            board[i].push(String.fromCodePoint(Math.floor(Math.random() * 26) + 65));
            board[i].push(String.fromCodePoint(Math.floor(Math.random() * 26) + 65));
        }

        return board;
    }

    checkWords(num) {
        // let randWord = this.shake(num);
        let randWord = [
            ['A', 'B', 'c'],
            ['I', 'M', 'D'],
            ['A', 'S', 'c'],
            ['A', 'B', 'c'],
        ];
        
        let word = ['IS', 'SIAPA'];
        let firstRand = Math.floor(Math.random() * word.length);
        let wordFirst = [];
        for(let i = 0; i < randWord.length; i++) {
            for(let j = 0; j < randWord[i].length; j++) {
                if(randWord[i][j] == word[firstRand][0]) {
                    wordFirst.push([word[firstRand]]);
                    wordFirst.push([i,j]);
                }
            }
        }
        return wordFirst
    }

    checkLeft() {
        
    }

    

}
  
let play = new BoogleBoard(4);
  
console.log(play.checkWords());