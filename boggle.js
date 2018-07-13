const fs = require('fs')

class Boogle {
  constructor (shake, kamus) {
    this.shake = shake
    this.kamus = kamus
    this.abjad = 'abjdefghijklmnopqrstuvwxyz'.toUpperCase()
  }

  printBoard () {
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
const jumlahShake = 10
const tesBoggle = new Boogle (jumlahShake, kamus)

console.log(tesBoggle)