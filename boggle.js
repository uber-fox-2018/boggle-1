class boggle {
    constructor (word) {
        this.word = word
    }

    boardMaker(num) {
        let res = []   
        for (let i = 0; i < num; i++) {
            let temp = []
            for (let j = 0; j < num;j++) {
                temp.push(' ')
            }
            res.push(temp)
        }
        return this.boardAnswerFiller(res)
    }

    boardAnswerFiller(arr) {
        let res = arr
        let i = 0
        let maxAnswerWord = Math.ceil(arr.length/2)
        let answer = []

        while (i !== maxAnswerWord) {
            let cordinate = this.cordinateMaker(arr.length-1)
            let wordPicker = this.wordPicker()
            let diffWord = true

            if (answer.length === 0) { 

            } else {
                for (let j = 0; j < answer.length;j++) {
                    if (wordPicker === answer[j]) { // pengecekan apakah kata jawaban sudah ada atau blum
                        diffWord = false
                    }
                }
            } if (res[cordinate[0]][cordinate[1]] === ' ') {

                if (diffWord) { // proses pemasukan kata 
                    let j = 0
                    let y = cordinate[0]
                    let x = cordinate[1]
                    let stuck = 0
                    let stepHistory = [] // untuk roolback
                    
                    answer.push(wordPicker)
    
                    while (j !== wordPicker.length) { // loop untuk memasukan perkata
                        let nextStep = this.randomNum(8,1) // pemilihan 8 arah mata angin
    
                        console.log('STEP 1 = generate answer and placing them \n')
                        console.log(res)
                        console.log('\n'+'Answer = '+answer)
                        this.sleep(100)
                        console.clear()
    
                        res[y][x] = wordPicker[j] //input kata ke table
                        stepHistory.push([y,x]) // push kordinate untuk rollback apabila stuck
                        if (this.searcher(nextStep,y,x,res)) {
                            if (nextStep === 1) { // kiri atas
                                y-= 1
                                x-= 1
                            } else if (nextStep === 2) { // atas
                                y-= 1
                            } else if (nextStep === 3) { // kanan atas
                                y-= 1
                                x+= 1
                            } else if (nextStep === 4) { // kanan
                                x+= 1
                            } else if (nextStep === 5) { // kanan bawah
                                y+= 1
                                x+= 1
                            } else if (nextStep === 6) { // bawah
                                y+= 1
                            } else if (nextStep === 7) { // kiri bawah
                                y+= 1
                                x-= 1
                            } else if (nextStep === 8) { //kiri
                                x-= 1
                            }
                            j++
                            stuck = 0
                        } else {
                            stuck++
                        }
                        if (stuck === 10) { // rollback
                            i--
                            answer.pop()
                            for (let k = 0; k < stepHistory.length;k++) {
                                res[stepHistory[k][0]][stepHistory[k][1]] = ' '
                            }
                            break
                        }
                    }
                    i++
                }
            }
            
        }
        // return this.boardRandomFiller(res)
        return this.boardRandomFiller(res)
    }

    boardRandomFiller(arr) {
        let res = arr
        let alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        

        for (let i = 0; i < arr.length;i++) {
            for (let j = 0; j < arr[i].length; j++) {
                if (res[i][j] === ' ') {
                    let num = this.randomNum(alpha.length-1,0)

                    res[i][j] = alpha[num]

                    console.log('STEP 2 = generate random alphabeth\n')
                    console.log(res)
                    this.sleep(200)
                    console.clear()

                }
            }
        } 
        return res
    }

    boardSolver(arr) {
        let res = arr

        for (let c = 0; c < arr.length*arr.length;c++) {
            
            for (let i = 0; i < arr.length; i++) {
                for (let j = 0; j < arr[i].length; j++) {
                    let temp = []
                    for (let k = 0; k < this.word.length; k++) {
                        if (res[i][j] === this.word[k]) {
                            temp.push(word[k])
                        }
                    }
                    if (temp.length !== 0) {
                        let side = 1
                        while(side < 9) {

                        }
                        if (this.searcherWord(side,i,j,res)) {
                            y = i
                            x = j

                        }
                    }
                }
            }
            
        }

        return arr
    }
    searcherWord(num,y,x,map) {
        if (num === 1) { // kiri atas
            if (typeof map[y-1] !== 'undefined' && typeof map[y-1][x-1] !== 'undefined') {
                return true
            }
            false
        } else if (num === 2) { // atas
            if (typeof map[y-1] !== 'undefined') {
                return true
            }
            false
        } else if (num === 3) { // kanan atas
            if (typeof map[y-1] !== 'undefined' && typeof map[y-1][x+1] !== 'undefined') {
                return true
            }
            false
        } else if (num === 4) { // kanan
            if (typeof map[y][x+1] !== 'undefined') {
                return true
            }
            false
        } else if (num === 5) { // kanan bawah
            if (typeof map[y+1] !== 'undefined' && typeof map[y+1][x+1] !== 'undefined') {
                return true
            }
            false
        } else if (num === 6) { // bawah
            if (typeof map[y+1] !== 'undefined') {
                return true
            }
            false
        } else if (num === 7) { // kiri bawah
            if (typeof map[y+1] !== 'undefined' && typeof map[y+1][x-1] !== 'undefined') {
                return true
            }
            false
        } else if (num === 8) { // kiri
            if (typeof map[y][X-1] !== 'undefined') {
                return true
            }
            false
        }
    }

    searcher(num,y,x,map) {
        if (num === 1) { // kiri atas
            if (typeof map[y-1] !== 'undefined' && typeof map[y-1][x-1] !== 'undefined' && map[y-1][x-1] === ' ') {
                return true
            }
            false
        } else if (num === 2) { // atas
            if (typeof map[y-1] !== 'undefined' && map[y-1][x] === ' ') {
                return true
            }
            false
        } else if (num === 3) { // kanan atas
            if (typeof map[y-1] !== 'undefined' && typeof map[y-1][x+1] !== 'undefined' && map[y-1][x+1] === ' ') {
                return true
            }
            false
        } else if (num === 4) { // kanan
            if (typeof map[y][x+1] !== 'undefined' && map[y][x+1] === ' ') {
                return true
            }
            false
        } else if (num === 5) { // kanan bawah
            if (typeof map[y+1] !== 'undefined' && typeof map[y+1][x+1] !== 'undefined' && map[y+1][x+1] === ' ') {
                return true
            }
            false
        } else if (num === 6) { // bawah
            if (typeof map[y+1] !== 'undefined' && map[y+1][x] === ' ') {
                return true
            }
            false
        } else if (num === 7) { // kiri bawah
            if (typeof map[y+1] !== 'undefined' && typeof map[y+1][x-1] !== 'undefined' && map[y+1][x-1] === ' ') {
                return true
            }
            false
        } else if (num === 8) { // kiri
            if (typeof map[y][X-1] !== 'undefined' &&  map[y][x-1] === ' ') {
                return true
            }
            false
        }
    }

    wordPicker() {
        let res = ''
        let num = this.randomNum(this.word.length-1,0)
        res = this.word[num]
        return res
    }

    cordinateMaker(num) {
        let res = []
        for (let i = 0; i < 2;i++) {
            let random = this.randomNum(num,0)
            res.push(random)
        }
        return res
    }

    randomNum(max,min) {
        let res = Math.round(Math.random()*(max-min)-min)
        return res
    }

    sleep (milliseconds) { //create delay print
        var start = new Date().getTime();
        for (var i = 0; i < 1e7; i++) {
          if ((new Date().getTime() - start) > milliseconds) {
            break;
          }
        }
    }
      
    clearScreen () {
    // Un-comment this line if you have trouble with console.clear();
    // return process.stdout.write('\033c');
    console.clear();
    }
}



// var fs = require('fs')
// var wordBank = fs.readFileSync('data.js')
var wordStore = ["APPLE","SIT","TRIP","TURN","SUPER"]
var game = new boggle(wordStore)


console.log(game.boardMaker(5))
