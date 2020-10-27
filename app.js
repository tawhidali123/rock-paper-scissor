const message = document.querySelector('.message');
const score = document.querySelector('.score');
const buttons = document.querySelectorAll('button');
let scoreBoard = [0,0]

for(let button of buttons){
    button.addEventListener('click', playGame)
}

function playGame(e){
    let playerSelection = e.target.innerText
    let computerSelection = Math.random()

    if(computerSelection <= 0.34){
        computerSelection = 'Paper'
    } else if(computerSelection <= 0.67){
        computerSelection = 'Rock'
    } else {
        computerSelection = 'Scissor'
    }

    console.log(playerSelection, computerSelection)

    let result = checkWinner(playerSelection, computerSelection)
    console.log(result)

    if(result === 'Player'){
        scoreBoard[0]++
        result += ' Wins!'
    } else if(result === 'Computer'){
        scoreBoard[1]++
        result += ' Wins!'
    } else {
        result += ', Its a Tie!! Go again...'
    }
    
    score.innerHTML = `Player ${scoreBoard[0]} / Computer ${scoreBoard[1]}`
    outputMessage(`
        ${playerSelection} vs ${computerSelection}
        <br>
        <h2>${result}</h2>
    `)

}

function outputMessage(mes){
    message.innerHTML = `${mes}`
}

function checkWinner(player, computer){
    if(player === computer){
        return 'Draw'
    } else if(player === 'Rock'){
        if(computer === 'Paper'){
            return 'Computer'
        } else {
            return 'Player'
        }
    } else if(player === 'Paper'){
        if(computer === 'Scissor'){
            return 'Computer'
        } else {
            return 'Player'
        }
    } else {
        if(computer === 'Rock'){
            return 'Computer'
        } else{
            return 'Player'
        }
    }
}