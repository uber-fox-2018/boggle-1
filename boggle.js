const fs = require('fs')
const Table = require('cli-table')

class Boogle {
  constructor (shake, kamus) {
    this.shake = shake
    this.dictionary = kamus
    this.abjad = 'abjdefghijklmnopqrstuvwxyz'.toUpperCase()
    this.words = []
  }

  createBoard () {
    const abjad = this.abjad
    const shakes = this.shake
    let board = []
    for (let i = 0; i < shakes; i++) {
      var isiBoard = []
      for (let j = 0; j < shakes; j++) {
        isiBoard.push(abjad.charAt(Math.floor(Math.random() * abjad.length)))
      }
      board.push(isiBoard)
    }
    return board
  }

  printBoard () {
    const board = this.createBoard()
    const table = new Table()

    board.forEach(board => {
      table.push(board)
    })

    return table.toString()
  }

  checkInDictionary (word) {
    if (this.dictionary.includes(word)) {
      return true
    } else {
      return false
    }
    
  }

  checkInBoard (board, position, i, j, word) {
    position[i][j] = true
    word = word + board[i][j]

    if (this.checkInDictionary(word)) {
      this.words.push(word)
    }

    for (let row = i - 1; row <= i+1 && row <= board.length-1; row++) {
      for (let col = j - 1; col <= j+1 && col <= board.length-1; col++) {
        if (word.length < 8 && row >= 0 && col >= 0 && !position[row][col]) {
          this.checkInBoard(board, position, row, col, word)
        }
      }
    }
    word = word.substring(0, word.length-1)
    position[i][j] = false
  }

  resultBoggle(word) {
    let table = new Table()
    let resultArr = []
    for (let i = 0; i < word.length; i++) {
      if (resultArr.indexOf(word[i]) === -1) {
        resultArr.push(word[i])
      }
    }

    console.log(`${resultArr.length} word found`)
    // for (let i = 0; i < resultArr.length; i++) {
    //   console.log(resultArr[i])
    // }
    table.push(resultArr)
    return table.toString()
  }

  solve () {
    let board = this.createBoard()
    let position = []

    for (let i = 0; i < board.length; i++) {
      let booleanArr = []
      for (let j = 0; j < board.length; j++) {
        booleanArr.push(false)
      }
      position.push(booleanArr)
    }

    let word = ''

    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board.length; j++) {
        this.checkInBoard(board, position, i, j, word)
      }
    }
    return this.resultBoggle(this.words)
  }

  
}

const kamus = require('./my_dictionary')
const jumlahShake = 10
const tesBoggle = new Boogle (jumlahShake, kamus)

console.log(tesBoggle.printBoard())
console.log(tesBoggle.solve()) 