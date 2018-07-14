class Boggle {
    constructor() {
        this.board = [];
        this.alphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 
                          'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 
                          'U', 'V', 'W', 'X', 'Y', 'Z'];
        this.boardSize = 0;
    }

    generateBoard(size) {
        let mainBoard = [];
        for (let i = 0; i < size; i++) {
            let innerBoard = [];
            mainBoard.push(innerBoard);
            for (let j = 0; j < size; j++) {
                if(innerBoard[j] === undefined) {
                    innerBoard.push('');
                }
            }
        }
        // console.log(mainBoard);
        return mainBoard;
    }
    
    shake(size) {
        this.boardSize = size;
        this.board = this.generateBoard(size);

        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                this.board[i][j] = this.alphabets[Math.floor(Math.random() * 26)];
            }
        }
        return this.board;
    }

}

const game = new Boggle();
console.log(game.shake(4));