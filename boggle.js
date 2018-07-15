var word = require('./data.js')

function wordShake(num){
    var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var mainArr = []    //mebuat cols dari array utama
    
    for(var i = 0; i < num; i++){
        var childArr = []   //memcd buat array utama
        for(var j = 0; j < num; j++){
            childArr.push(alphabet[Math.floor(Math.random()*alphabet.length)])
        }
        mainArr.push(childArr)
       }

    return mainArr
  }






console.log(wordShake(4));

