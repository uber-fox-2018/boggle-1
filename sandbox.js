//RELEASE 0 : CREATE METHOD SHAKE WITH INPUT SIZE OF BOARD AND RETURN ARRAY SIZE*SIZE WITH SUFFLED CHARACTER A-Z

class Boggle {
    constructor () {
      this.usedCoordinate = [];
    }
  
    randomChar() {
      let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      return chars[Math.floor(Math.random()*26)];
    }
   
    //RELEASE 0 : CREATE METHOD SHAKE WITH INPUT SIZE OF BOARD AND RETURN ARRAY SIZE*SIZE WITH SUFFLED CHARACTER A-Z
    shake (size) {
      let boardArr = [];
      for (let i = 0; i < size; i++) {
        if (boardArr[i] === undefined) {
          boardArr.push([]);
        }
        for (let j = 0 ; j < size ; j++) {
          boardArr[i][j] = this.randomChar();
        }
      }
      return boardArr;
    }
  
    //RELEASE 1 CHECK A STRING IF AVAILABLE IN BOARD OR NOT
    //INPUT STRING 'str' THAT WILL BE CHECKED, AND 'board' ARRAY OF BOARD
    //RETURN TRUE IF AVAILABLE AND FALSE IF NOT AVAILABLE
    findString(str,board) {
      let prefix = "";
      //do looping check entire board one by one
      for (let i = 0 ; i < board.length ; i++) {
        for (let j = 0 ; j < board[i].length ; j++) {
          let currentCoordinate = [i,j];
          prefix = board[i][j];
          this.usedCoordinate = [];
          //run the string check in current coordinate 
          if (this.runCheck (currentCoordinate, prefix, str, board) === true) {
            return true;
          }
        }
      }
      //if until end of looping not return true then return false;
      return false;
    }
  
    //REKURSIF FUNCTION CHECKING IF INPUT PARAMETER PREFIX IN DICTIONARY OR NOT, IT IS LIKE BACKTRACK ALGORITHM THAT USED IN SUDOKU EXERCISE
    runCheck (coordinate, prefixStr, str, board) {
      let boardSize = board.length;
      if (str.indexOf(prefixStr) === 0 && prefixStr !== str) { //check if prefix is par of string or not
        this.usedCoordinate.push(coordinate);
        //do check for every direction that represented by number
        // → = 1 , ↘ = 2 , ↓ = 3, ↙ = 4 , ← = 5, ↖ = 6, ↑ = 7, ↗ = 8
        for (let direction = 1 ; direction <=8 ; direction++) {
          let newCoordinate = this.checkCoordinate(coordinate,direction,boardSize);
          if (newCoordinate !== false) {
            let row = newCoordinate[0];
            let column = newCoordinate[1];
            prefixStr += board[row][column];
            //DO RECURSIVE 'runCheck' TO CHECK NEXT COORDINATE WITH INPUT UPDATED PREFIX
            if (this.runCheck(newCoordinate, prefixStr, str, board) === true) {
              return true;
            } else {
              prefixStr = prefixStr.slice(0,prefixStr.length-1); //remove last added char using slice
            }
          }
        }
        this.usedCoordinate.pop();
      } else if (prefixStr === str) { //check condition if the string found in board
        return true;
      } else return false; // return false if prefix is not substring of str
    }
  
    //GET NEW COORDINATE BASE IN DIRECTION THAT WILL BE USED TO NEXT CHECK
    //RETURN TRUE IF THE NEW COORDINATE IS STILL IN BOARD RANGE AND HAS NOT PART OF USED COORDINATE
    checkCoordinate(coordinate, direction,boardSize) {
      let newRow = coordinate[0];
      let newColumn = coordinate[1];
      switch (direction) {
        case 1:
          newColumn += 1;
          break;
        case 2:
          newRow += 1;
          newColumn += 1;
          break;
        case 3:
          newRow += 1;
          break;
        case 4:
          newRow += 1;
          newColumn -= 1;
          break;
        case 5:
          newColumn -= 1;
          break;
        case 6:
          newRow -= 1;
          newColumn -= 1;
          break;
        case 7:
          newRow -= 1;
          break;
        case 8:
          newRow -= 1;
          newColumn += 1;
          break;            
        default:
          break;
      }
      let newCoordinate = [newRow,newColumn];
      if (newRow < 0 || newRow >= boardSize || newColumn < 0 || newColumn >= boardSize || this.checkIncludes(newCoordinate, this.usedCoordinate) === true) {
        return false;
      } else {
        return newCoordinate;
      }
    }
  
  
    //make manual method to check wether an array exist in array of array, since can not use build in includes() method
    checkIncludes(coordinate, arrayUsedCoordinate) {
      let strCoor = ""+coordinate[0]+coordinate[1];
      for (let i = 0 ; i < arrayUsedCoordinate.length; i++) {
        let strArrUsedCoor = "";
        for (let j = 0 ; j < arrayUsedCoordinate[i].length ; j++) {
          strArrUsedCoor += arrayUsedCoordinate[i][j];
        }
        if (strArrUsedCoor === strCoor) {
          return true;
        }
      }
      return false;
    }
  
    //RELEASE 2 FIND ALL STRING DICTIONARY IN THE BOARD 
    findAllString(dictionary, board) {
      let isFound = false;
      for (let i = 0 ; i < dictionary.length ; i++) {
        if (this.findString(dictionary[i],board) === true) {
          console.log ("FOUND STRING",dictionary[i]);
          isFound = true;
        } 
      }
      if (isFound === false) {
        console.log("NONE DICTIONARY STRING AVAILABLE IN BOARD");
      }
    }
  
    printBoard(board) {
      let printBoard = "";
      let printPerline = "";
      let printBorder = "";
      for (let i = 0 ; i < board.length ; i++) {
        for (let j = 0 ; j < board.length; j++) {
          printPerline += `| ${board[i][j]} `;
          printBorder += "----";
        }
        printPerline += '|'
        printBorder += "-"
        printBoard += printBorder+"\n"+printPerline+"\n";
        if(i === board.length-1) {
          printBoard += printBorder
        }
        printBorder = ""
        printPerline = "";
      }
      return console.log(printBoard);
    }
  
  }
  
  
  
  
  var game = new Boggle();
  //RELEASE 0 : CREATE METHOD SHAKE WITH INPUT SIZE OF BOARD AND RETURN ARRAY SIZE*SIZE WITH SUFFLED CHARACTER A-Z
  let shuffledBoard = (game.shake(4));
  console.log("RELESE 0 TEST")
  game.printBoard(shuffledBoard);
  console.log("")
  
  
  //RELEASE 1 : CHECK A STRING IF AVAILABLE IN BOARD RETURN TRUE, IF NOT AVAILABLE RETURN FALSE
  
  /*PSEUDOCODE RELEASE 1
  STORE AND SET 'usedCoordinate' = EMPTY ARRAY []
  FUNCTION 'findString' WITH INPUT 'str' AS STRING AND 'board' AS ARRAY OF BOARD
    STORE AND SET 'prefix' = "";
    FOR 'i' = 0 TO 'i' < LENGTH OF ARRAY 'board' DO
      FOR 'j" = 0 TO 'j" < LENGTH OF ARRAY 'board' INDEX ROW 'i' DO
        STORE AND SET 'currentCoordinate' = ARRAY CONTAIN [i,j]
        SET 'prefix' = VALUE OF ARRAY 'board' INDEX [i][j]
        SET 'usedCoordinate' = EMPTY ARRAY []
        IF RUN FUNCTION 'runCheck' WITH INPUT ('currentCoordinate', 'prefix', 'str', 'board') RETURN 'true' THEN
          RETURN 'true'
        ENDIF
      ENDFOR
    ENDFOR
    RETURN 'false'
  ENDFUNCTION
  FUNCTION 'runCheck' WITH INPUT 'coordinate' AS ARRAY, 'prefixStr' AS STRING, 'str' AS STRING AND 'board' AS ARRAY
    STORE AND SET 'boardSize' = LENGTH OF ARRAY 'board'
    IF STRING 'prefixSTR' INCLUDES IN STRING 'str' AND 'prefixSTR' NOT EQUAL TO 'str' THEN
      ADD 'coordinate' VALUE TO 'usedCoordinate' ARRAY
      FOR 'direction' = 1 TO 8 DO
        STORE AND SET 'newCoordinate' = RESULT OF FUNCTION 'checkCoordinate' WITH INPUT ('coordinate' as ARRAY, 'direction' AS NUMBER, 'boardSize' AS NUMBER)
        IF 'newCoordinate' NOT EQUAL TO 'false' THEN
          STORE AND SET 'row' = ARRAY 'newCoordinate' INDEX [0]
          STORE AND SET 'column' = ARRAY 'newCoordinate' INDEX [1]
          SET 'prefixStr' = 'prefixStr' APPEND WITH VALUE OF ARRAY 'board' INDEX [row][column]
          IF RUN RECURSIVE FUNCTION 'runCheck' WITH INPUT ('newCoordinate', 'prefixStr', 'str', 'board') RETURN 'true' THEN
            RETURN 'true'
          ELSE 
            SET 'prefixStr' = REMOVE LAST CHARACTER ON STRING 'prefixStr'
          ENDIF
        ENDIF
      ENDFOR
      REMOVE LAST ELEMENT OF ARRAY 'usedCoordinate'
    ELSE IF STRING 'prefixSTR' = STRING 'str' THEN
      RETURN 'true'
    ELSE 
      RETURN 'false'
    ENDIF
  ENDFUNCTION
  FUNCTION 'checkCoordinate' WITH INPUT 'coordinate' AS ARRAY, 'direction' AS NUMBER, 'boardSize' AS NUMBER
    STORE AND SET 'newRow' = INDEX [0] OF ARRAY 'coordinate'
    STORE AND SET 'newColumn' = INDEX [1] OF ARRAY 'coordinate'
    CASE 'direction' OF 
      1 : SET 'newColumn' = 'newColumn' + 1
      2 : SET 'newRow' = 'newRow' + 1
          SET 'newColumn' = 'newColumn' + 1
      3 : SET 'newRow' = 'newRow' + 1
      4 : SET 'newRow' = 'newRow' + 1
          SET 'newColumn' = 'newColumn' - 1
      5 : SET 'newColumn' = 'newColumn' - 1
      6 : SET 'newRow' = 'newRow' - 1
          SET 'newColumn' = 'newColumn' - 1
      7 : SET 'newRow' = 'newRow' - 1
      8 : SET 'newRow' = 'newRow' - 1
          SET 'newColumn' = 'newColumn' + 1
    ENDCASE
    STORE AND SET 'newCoordinate' = ARRAY CONTAIN ['newRow','newColumn']
    IF 'newRow' < 0 OR 'newRow' >= 'boardSize' OR 'newColumn' < 0 OR 'newColumn' >= 'boardSize' OR ARRAY 'newCoordinate' IS NOT INCLUDE IN ARRAY 'usedCoordinate' THEN
      RETURN 'false'
    ELSE 
      RETURN 'newCoordinate'
    END IF
  END FUNCTION
  */
  
  //RELEASE 1 TEST WITH PRE DEFINED BOARD
  let sampleBoard = [
    ['D', 'G', 'H', 'I'],
    ['K', 'L', 'P', 'S'],
    ['Y', 'E', 'U', 'T'],
    ['E', 'O', 'R', 'N']
  ]
  console.log("RELESE 1 TEST")
  game.printBoard(sampleBoard);
  console.log("TURN", game.findString("TURN",sampleBoard));
  console.log("SUPER",game.findString("SUPER",sampleBoard));
  console.log("APPLE",game.findString("APPLE",sampleBoard));
  console.log("PUPI",game.findString("PUPI",sampleBoard));
  console.log("")
  
  //RELEASE 2 TEST FIND ALL STRINGS IN DICIONARY IN THE BOARD
  let sampleDictionary = ['APPLE','SIT','TRIP','TURN','SUPER'];
  console.log("RELEASE 2 TEST WITH SAMPLE DICTIONARY")
  game.printBoard(sampleBoard);
  game.findAllString(sampleDictionary,sampleBoard);
  console.log("")
  
  // RELEASE 2 TEST FIND IMPORTED DICTIONARY FROM FILE
  let importedDictionary = require('./data.js');
  console.log("RELEASE 2 TEST WITH IMPORTED DICTIONARY")
  game.printBoard(sampleBoard);
  game.findAllString(importedDictionary,sampleBoard);

  //console.log(importedDictionary)