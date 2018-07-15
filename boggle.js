class Boggle {
    constructor() {
        this.board = this.shake(4)
    }

    shake(num) {
        let mainArr = []
        let alphabet = 'ABCDEFGHOJKLMNOPQRSTUVWXYZ'
        for(let i = 0; i < num; i++) {
            let subArr = []
            for(let j = 0; j < num; j++) {
                let random = Math.floor(Math.random() * 26);
                subArr.push(alphabet[random])
            }
            mainArr.push(subArr)
        }
        return mainArr
    }
}


let gameBoggle = new Boggle()
// gameBoggle.shake(4)
console.log(gameBoggle.board);