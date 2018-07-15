"use strict"

class BoggleBoard {
    constructor() {
        this.board = [];
        this.words = [];
        this.result = [];
    }

    getRandomChar() {
        let chars = [], i = 0;

        chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
        i = Math.floor(Math.random() * chars.length);
        return chars[i];
    }

    setWords(words) {
        this.words = words;
    }

    shake(size) {
        let y, x, row;
        for(y = 0; y < size; y++) {
            row = [];
            for(x = 0; x < size; x++) {
                row.push(this.getRandomChar());
            }
            this.board.push(row);
        }

        console.log(this.board);

        this.findWords();
        console.log(`${this.result.length} words found.`);
        for(let i = 0; i < this.result.length; i++)
            console.log(this.result[i]);
    }

    initVisited() {
        let y, x, row, visited = [];
        for (y = 0; y < this.board.length; y++) {
            row = [];
            for (x = 0; x < this.board.length; x++) {
                row.push(false);
            }
            visited.push(row);
        }
        return visited;
    }

    findWords() {
        let y, x, str = '';

        let visited = this.initVisited(this.board);

        for (y = 0; y < this.board.length; y++) {
            for (x = 0; x < this.board.length; x++) {
                this.findWordInDictionary(visited, y, x, str);
            }
        }
    }

    findWordInDictionary(visited, y, x, str) {
        let i, j;
        visited[y][x] = true;
        str += this.board[y][x];

        if (this.words.includes(str))
            this.result.push(str);

        for (i = y - 1; i <= y + 1 && i < this.board.length; i++) {
            for (j = x - 1; j <= x + 1 && j < this.board.length; j++) {
                if(i >=0 && j >= 0 && !visited[i][j])
                    this.findWordInDictionary(visited, i, j, str);
            }
        }

        str = str.slice(0, -1);
        visited[y][x] = false;
    }
}

const dataWords = require('./data.js');
var boggle = new BoggleBoard();
boggle.setWords(dataWords.words);
boggle.shake(4);