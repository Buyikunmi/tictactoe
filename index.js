const possibleOutcomes = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [3,6,9],
    [2,5,8],
    [1,4,7],
    [1,5,9],
    [3,5,7],
  
]

let player1 = {  
    name :'Player 1',
    text :'X',
    selection:[]
}
let player2 = {  
    name :'Player 2',
    text :'O',
    selection:[]
}

  

  let currentPlayer = player1
 function arrayIsSubset(arr, bigArr) {
    return arr.every(e => bigArr.indexOf(e) > -1)
}



function pushSelection(sel){
currentPlayer.selection.push(sel)
}


function checkWinConditons(playerSelection) { 
   let res =  possibleOutcomes.filter(possibleOutcome =>  arrayIsSubset(possibleOutcome, playerSelection))      
                   
console.log(!!res.length, res)
return(res)
}

let tiles = document.getElementsByClassName('tile')

const changeCurrentPlayer = () =>   currentPlayer = currentPlayer === player1 ? player2 : player1;

function markTile() {
   if (!!this.innerHTML) return null;
   this.innerHTML = currentPlayer.text
   currentPlayer.selection.push(+this.id)
   console.log(JSON.stringify(currentPlayer));

   checkWinConditons(currentPlayer.selection)
   changeCurrentPlayer()
}

Array.from(tiles).forEach(el => el.addEventListener('click', markTile))



// checker([1,4,2,5,8,9])