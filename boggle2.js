"use strict"

class BoggleBoard {
    constructor() {
        this.board = [];
        this.words = [];
        this.emptyChar = ' ';
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
        // let y, x, row;
        // for(y = 0; y < size; y++) {
        //     row = [];
        //     for(x = 0; x < size; x++) {
        //         row.push(this.emptyChar);
        //     }
        //     this.board.push(row);
        // }

        this.board = [
            ['D', 'G', 'H', 'I'],
            ['K', 'L', 'P', 'S'],
            ['Y', 'E', 'U', 'T'],
            ['E', 'O', 'R', 'N']
        ]
    }

    searchWords() {
        let result = [];
        let found = 0;
        for (let i = 0; i < this.words.length; i++) {
            if(this.searchWord(this.words[i])) {
                found++;
                result.push(this.words[i]);
            }
        }
        console.log(`${found} words found.`);
        for(let i = 0; i < result.length; i++) {
            console.log(result[i]);
        }
    }

    searchWord(word) {
        let currentPos, nextPos, traversed = [], i = 0, begin = true;
        while (i < word.length) {
            if(traversed.length === 0 && !begin)
                return false;
            else if (traversed.length === 0 && begin) {
                begin = false;
                nextPos = this.searchBoard(word[i]);
                if (nextPos.length === 0)
                    return false;
                else {
                    traversed.push(nextPos);
                    i++;
                }
            }
            else {
                currentPos = traversed[traversed.length-1];
                if(currentPos.length === 0) {
                    traversed.splice(-1,1);
                    i--;
                    continue;
                }

                nextPos = this.searchAdjacent(word[i], traversed);

                if (nextPos.length === 0) {
                    traversed[traversed.length-1].splice(0,1);
                }
                else {
                    traversed.push(nextPos);
                    i++;
                }
            }
        }
        return this.compareString(word, traversed);
    }

    compareString(word, traversed) {
        let y, x;
        for(let i = 0; i < word.length; i++) {
            y = traversed[i][0][0];
            x = traversed[i][0][1];
            if(this.board[y][x] !== word[i])
                return false;
        }
        return true;
    }

    searchBoard(char) {
        let positions = []

        if (typeof char === 'undefined') return [];

        for (let y = 0; y < this.board.length; y++) {
            for (let x = 0; x < this.board.length; x++) {
                if (this.board[y][x] === char)
                    positions.push([y,x]);
            }
        }
        return positions;
    }

    searchAdjacent(char, traversed) {
        let y, x, pos, positions = [], nextPositions = [];

        if (typeof char === 'undefined') return [];

        if (traversed.length === 0) return [];

        positions = traversed[traversed.length - 1];

        if (positions.length === 0)
            return [];

        pos = positions[0];

        for (y = pos[0] - 1; y <= pos[0] + 1; y++) {
            for (x = pos[1] - 1; x <= pos[1] + 1; x++) {
                if (y === pos[0] && x === pos[1])
                    continue;
                if (this.isPositionValid([y, x]) &&
                    !this.hasBeenTraveled([y, x], traversed) &&
                    this.board[y][x] === char) {
                        nextPositions.push([y, x]);
                }
            }
        }

        return nextPositions;
    }

    isPositionValid(position) {
        if (position[0] < 0 ||
            position[1] < 0 ||
            position[0] >= this.board.length ||
            position[1] >= this.board.length)
            return false;

        return true;
    }

    hasBeenTraveled(position, traveled) {
        for (let i = 0; i < traveled.length; i++) {
            if (position[0] === traveled[i][0][0] &&
                position[1] === traveled[i][0][1])
                return true;
        }
        return false;
    }
}

var boggle = new BoggleBoard();
boggle.shake(4);
console.log(boggle.board);

var words = ['APPLE', 'SIT', 'TRIP', 'TURN', 'SUPER'];
boggle.setWords(words);

console.log(boggle.searchWord('TURN'));