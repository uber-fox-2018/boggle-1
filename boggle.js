class Boogle {
    constructor(){
        
    }

    board(rows,cols){
        let result =[];
        let alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        for(let i=0; i<cols;i++){
            let row = [];
            for(let j = 0; j < rows; j++){
                let random = Math.floor(Math.random()*(alpha.length-1));
                let randomAlpha = alpha[random];
                row.push(randomAlpha)
            }
            result.push(row);
        }
        return result
    }
}

var boogle = new Boogle;
console.log(boogle.board(4,5))