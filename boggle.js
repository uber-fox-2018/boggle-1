class Boogle {
    constructor(){
        this.boogleBoard = []
        this.dictionary = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    }

    board(jmlShake){
        for (let i = 0; i < jmlShake; i++) {
            let newArr = []
            this.boogleBoard.push(newArr)
        }
        return this.boogleBoard
    }

    shake(jmlShake){
        let board = this.board(jmlShake)
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board.length; j++) {
                let random = Math.floor(Math.random()*this.dictionary.length)
                board[i].push(this.dictionary[random])
            }
        }
        return board
    }
    
}

let bugel = new Boogle()
console.log(bugel.shake(4));


