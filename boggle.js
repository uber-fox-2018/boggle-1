var kamus = ['APPLE','SIT','TRIP','TURN','SUPER']
var board = [ [ 'D', 'G', 'H', 'I' ],
              [ 'K', 'L', 'P', 'S' ],
              [ 'Y', 'E', 'U', 'T' ],
              [ 'E', 'O', 'R', 'N' ] ];
/*
'2 words found:'
'TURN'
'SUPER'
*/
class boggle{
    constructor() {
        this.board = board
        this.pos = this.getPos(board)
        this.kamus = kamus
    }
    getPos(){
        var res = []
        for(let i = 0 ; i < this.board.length ; i++){
            for(let j = 0 ; j < this.board.length ; j++){
                var arr = []
                arr.push(i,j)
                res.push(arr)
            }
        }
        return res

    }
    checkSquare(i,j,x,y){
        if(board[i+1][j-1] === kamus[x][y]){
            i+=1
            j-=1
            y+=1
            
            return true
            
        }else if(board[i][j-1] === kamus[x][y]){
            j-=1
            y+=1
            return true
            
        }else if(board[i-1][j-1] === kamus[x][y]){
            i-=1
            j-=1
            y+=1
            return true
            
        }else if(board[i-1][j] === kamus[x][y]){
            i-=1
            y+=1
            return true
            
        }else if(board[i][j-1] === kamus[x][y]){
            j-=1
            y+=1
            return true
            
        }else if(board[i-1][j-1] === kamus[x][y]){
            i-=1
            j-=1
            y+=1
            return true
            
        }else if(board[i-1][j] === kamus[x][y]){
            i-=1
            y+=1
            return true
            
        }else if(board[i-1][j+1] === kamus[x][y]){
            i-=1
            j+=1
            y+=1
            return true
            
        }else if(board[i][j+1] === kamus[x][y]){
            j+=1
            y+=1
            return true
            
        }else if(board[i+1][j+1] === kamus[x][y]){
            i+=1
            j+=1
            y+=1
            return true
            
        }
        return false
    }
    cariHuruf(board, kamus){
        var board = this.board
        var kamus = this.kamus
        var found = []
        var i = 0
        while(i<board.length){
            let j = 0

            while(j < board.length){

                // console.log(board[i][j])
                
                for(let x = 0; x < kamus.length ; x++){
                    let y = 0
                    if(board[i][j] === kamus[x][y]){ // 1, 3   
                        // console.log(kamus[x])
                        y++
                        if(this.checkSquare(i,j,x,y) === true){
                            found.push(kamus[x])
                        }else{
                            
                        }

                    }

                    
            
                }


                j++
            }
            i++
        }
        return found
    }
    solve(){

    }
}
var game = new boggle()
// game.solve()

console.log(game.cariHuruf())
/*

1. lihat huruf board persatu satu
2. apakah huruf board tersebut sama dengan huruf pertama dalam kamus?
  2.1 kalau tidak ada display tidak ada huruf yang match
3. check


*/