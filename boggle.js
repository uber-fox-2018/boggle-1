const fs = require('fs')
const Table = require('cli-table')

class Boogle {
  constructor (shake, kamus) {
    this.shake = shake
    this.kamus = kamus
    this.abjad = 'abjdefghijklmnopqrstuvwxyz'.toUpperCase()
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

  checkHorizontal () {
    
  }

  checkVertical () {

  }

  checkZigzag () {

  }

  solve () {

  }

  
}

const kamus = require('./my_dictionary')
const jumlahShake = 4
const tesBoggle = new Boogle (jumlahShake, kamus)

console.log(tesBoggle.printBoard())