// #############  WORK FLOW   #############// 
/*   Breakdown function yang akan di gunakan
     1) function generate board () untuk membuat board
     2) function cekhuruf
     3) function solve ()

1) generate board ()
    methode ini berguna untuk membuat papan secara dinamis, baik ukuran dan huruf yang diisi
    gunakan math random dan buat variable alphabet untuk isinya
2) solve ()
    pada methode solve ini saya menggunakna 3 looping
        1) LOOPING PERTAMA  
            berfungsi sebagai batas permainan berhenti yang mana jika kata kata
            yang ingin dicari sudah dicek semua
        2) LOOPING KEDUA
            berfungsi sebagai linear search pada board untuk menemukan huruf pertama 
            kamus ada atau tidak dalam board, jika ada akan dilanjutkan pada method cek
            jika tidak ganti kata
       

3) cek ()
    pada method ini jika huruf pertama sudah ditemukan melakukan pengecekan kesegala arah
    apa kah huruf berikutnya dari kata yang dicari ada di sebelah2 sebelahnya
    jika tidak ada return false dan akan ganti kata
    jika ada akan return true dan ganti huruf ---> menggunakan rekusif untuk ganti huruf 
*/

class BoggleBoardDinamis {
    constructor  (kamus,boardSize){
        this.dataKamus = kamus
        this.size = boardSize
        
    }
    solve () {
        let board = this.board()
        let kamus = this.dataKamus
        let kataBoard = []    
        
        
        // loop pertama untuk berhenti game yang artinya semua kata
        // dalam kamus sudah di cek dalam boggle board
      for (let ke=0 ; ke < kamus.length; ke++ ){

        
        // linearSearch dalam board untuk menemukan huruf pertama
        // kata pada kamus
         for (let i=0 ; i < board.length ; i++){
            for (let j=0 ; j < board.length ; j++){
                if (board[i][j] == kamus[ke][0]){

                    //tentukan koordinat awal
                    let koordinat_baris = i
                    let koordinat_kolom = j
                    
                    //  karena huruf pertama sudah ditemukan pada boggle board
                    // maka tidak diperluka lagi untuk pengecekan, lakukan slice
                    let cekKataSisa = kamus[ke].slice(1)
                    var cek = this.cekBoggleBoard (koordinat_baris,koordinat_kolom,cekKataSisa,board)
                    //  parameter yang diperlukan untuk pengecekan adalah
                    // posisi baris : i --> koordinat_baris
                    // posisi kolom : j --> koordinat_kolom
                    // sisa huruf dari kata yang dicari --> cekKataSisa
                    // dan boggle board nya --> board
                    
                    if (cek === true) {
                        board[i][j] = kamus[ke][0]
                        kataBoard.push(kamus[ke])
                        
                      }
                      else if (cek === false) {
                        board[koordinat_baris][koordinat_kolom] = kamus[ke][0]
                      }

                }
            }
         }
     }
     console.log(board);
     console.log(kataBoard)
     if (kataBoard.length > 0) {
 
       console.log(kataBoard.length +' kata yang ditemukan dalam boggleBoard');
       for (let i = 0; i < kataBoard.length; i++) {
         console.log(kataBoard[i]);
       }
     }
     else{
       console.log('kata tidak ada di boggleboard');
     }
   }
    
    
    cekBoggleBoard(koordinat_baris,koordinat_kolom,cekKataSisa,board){
        // variable untuk posisi-posisi
        let barisBawah   = koordinat_baris +1
        let barisAtas  = koordinat_baris -1
        let kolomKanan   = koordinat_kolom +1
        let kolomKiri  = koordinat_kolom -1

        let kataSisa = cekKataSisa
        
        //gunakan looping rekursif untuk mendapatkan value true/false
        //kalau kata yang dicek ada dalam boggleboard
        
        if (kataSisa.length > 0){

            if (barisAtas < 0){
                barisAtas = koordinat_baris
                // berfungsi untuk mengcounter undefined
                // jadi jika nilai i < 0 di kembalikan ke posisi i semula
                // jadi tidak perlu mengecek arah i bagian atas karena akan error 
            }
            else if (barisBawah > board.length-1) {
                barisBawah = koordinat_baris
                // berfungsi untuk mengcounter undefined
                // jadi jika nilai i > panjang baris di kembalikan ke posisi i semula
                // jadi tidak perlu mengecek arah i bagian bawah karena akan error 
            }
        
            if (kolomKiri < 0){
            kolomKiri = koordinat_kolom
                // berfungsi untuk mengcounter undefined
                // jadi jika nilai j < 0 di kembalikan ke posisi j semula
                // jadi tidak perlu mengecek arah j bagian kiri karena akan error 
            }
            else if (kolomKanan > board.length-1) {
            kolomKanan = koordinat_kolom
                 // berfungsi untuk mengcounter undefined
                // jadi jika nilai j > panjang kolom di kembalikan ke posisi j semula
                // jadi tidak perlu mengecek arah j bagian kanan karena akan error 
            }

                for (let i=barisAtas ; i <= barisBawah ; i++){
                    for (let j= kolomKiri ; j <= kolomKanan ; j++){
                        if(board[i][j] == kataSisa[0]){
                            
                            let koordinat_baris = i
                            let koordinat_kolom = j

                            let cekKataSisa = kataSisa.slice(1)
                            var cek = this.cekBoggleBoard(koordinat_baris,koordinat_kolom,cekKataSisa,board)

                            if (cek == true){
                                // buat jejak di bord 
                                board[koordinat_baris][koordinat_kolom] = kataSisa[0]
                                return true
                            }
                            else if (cek == false){
                                // buat jejak di bord 
                                board[i][j] = kataSisa[0]
                            }
                        }
                    }
                }
        }
        // 
        else {
            return true
        }
      
        return false
    }
    board () { 
        let isiBoard = 'abcdefghijklmnopqrstuvwxyz'
        let sizeBoard = this.size
        let board = []
        
        for (let i=0 ; i < sizeBoard ; i++){
            let isi = []
            for (var j=0 ; j < sizeBoard ; j++){
                isi.push(isiBoard[Math.floor(Math.random() * 26)].toUpperCase())
            }
            
            board.push(isi)
        }
        return board
    }
    
}

let kamus = ['APPLE', 'SIT', 'TRIP', 'SUPER','TURN']
let boardSize = 10
let game = new BoggleBoardDinamis (kamus,boardSize)
console.log(game.solve())