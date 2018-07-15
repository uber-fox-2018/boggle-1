function board(num) {
    var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
      var arrBoard=[];
      for (var i = 0; i < num; i++){
          arrBoard.push([]);
          for(var j = 0; j < num; j++){
              arrBoard[i].push(alphabet[Math.floor(Math.random() * alphabet.length)]);
          }
      }
      return arrBoard;
  }
  
  function solve(words,num){
  
    let boggle = board(num)
    let resultFound = []
  
    for (let count = 0; count < words.length; count++) {
  
      for (var i = 0; i < num; i++) {
        for (var j = 0; j < num; j++) {
          if (boggle[i][j] === words[count][0]) {
  
            var corX = i
            var corY = j
            var cut = words[count].slice(1)
  
            var cek = checkAround(corX,corY,cut,boggle)
  
            if (checkAround(corX,corY,cut,boggle) === true) {
              boggle[i][j] = words[count][0]
              resultFound.push(words[count])
              break;
            }
            else if (checkAround(corX,corY,cut,boggle) === false) {
              boggle[corX][corY] = words[count][0]
            }
          }
        }
  
        if(cek === true) {
          break
        }
      }
    }
  
    // console.log(boggle);
    if (resultFound.length >= 0) {
  
      console.log(resultFound.length +  ' kata ditemukan :');
      for (var i = 0; i < resultFound.length; i++) {
        console.log(resultFound[i]);
      }
    }
    else{
      console.log('Tidak menemukan kata');
    }
  }
  
  function checkAround(corX,corY,cut,boggle) {
    
    var upX = corX + 1
    var downX = corX - 1
  
    var upY = corY + 1
    var downY = corY - 1
  
    var words = cut
  
    if (cut.length > 0) {
  
      if (downX < 0) {
        downX = corX
      }
      else if (upX > boggle.length-1) {
        upX = corX
      }
  
      if (downY < 0){
        dpwnY = corY
      }
      else if (upY > boggle.length-1) {
        upY = corY
      }
  
      for (var i = downX; i <= upX; i++){
        for (var j = downY; j <= upY; j++){
  
          if (cut[0] === boggle[i][j]) {
  
            var corX = i
            var corY = j
  
            var cut = words.slice(1)
  
            var cek = checkAround(corX,corY,cut,boggle)
  
            if (cek === true) {
              boggle[corX][corY] = words[0]
              return true
            }
            else if (cek === false) {
              boggle[i][j] = words[0]
            }
          }
        }
      }
    }
  
    else {
      return true;
    }
  
    cek = false
    return cek;
  
  }
  
  
  
  var data = ["ABA","ABAD","ABADI","ABAH","ABAI","ABAL","AKUSTIKA","AKUT","AKWAL","AL","ALA","ALABANGKA","ALABIO","ALAF","ALAH",
  "DENYUT","DEODORAN","DEOKNUMISASI","DEONTOLOGI","DEP","DEPA","DEPAK","DEPALATALISASI","DEPAN","DEPANG","DEPAP","DEPARPOLISASI","DEPARTEMEN","DEPARTEMENTAL","DEPARTEMENTALISASI","DEPENDEN","DEPENDENSI","DEPERSONALISASI","DEPERSONIFIKASI","DEPIGMENTASI","DEPILASI","DEPLESI","DEPO","DEPOLARISASI","DEPOLITISASI",
  "DEPONIR","DEPOPULASI","DEPORTASI","DEPOSAN","DEPOSIT","DEPOSITO","DEPOT","DEPRESI","DEPRESIASI","DEPRESOR","DEPROK","DEPROTONASI","DEPUN","DEPUS","DEPUTASI","DEPUTI","DERA","DERAGEM","DERAI","DERAJAH","DERAJANG","DERAJAT",]
  
  // var boggle = new boggle(data, length)
  
  solve(data , 20);
  console.log(board(6))