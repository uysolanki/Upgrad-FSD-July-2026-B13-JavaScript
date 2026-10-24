const rockButton=document.querySelector("#rock-btn")
const paperButton=document.querySelector("#paper-btn")
const scissorsButton=document.querySelector("#scissors-btn")
const resetButton=document.querySelector("#reset-btn")

rockButton.addEventListener('click',()=>playGame("Rock"))
paperButton.addEventListener('click',()=>playGame("Paper"))
scissorsButton.addEventListener('click',()=>playGame("Scissors"))
resetButton.addEventListener('click', resetScore)
let win=0
let loss=0
let tie=0

const movesPara=document.querySelector("#moves-para")
const resultsPara=document.querySelector("#result-para")
const scorePara=document.querySelector("#score-para")

let result=""

function playGame(playerMove)
{
    let computerMove=generateComputerMove()
 
    switch(playerMove)
    {
        case "Rock":
                    switch(computerMove)
                    {
                       case "Rock": result="Tie"; break
                       case "Paper": result="Loss"; break
                       case "Scissors": result="Win"; break
                    }
        break;

        case "Paper":
                    switch(computerMove)
                    {
                       case "Rock": result="Win"; break
                       case "Paper": result="Tie"; break
                       case "Scissors": result="Loss"; break
                    }
        break;

        case "Scissors":
            switch(computerMove)
                    {
                       case "Rock": result="Loss"; break
                       case "Paper": result="Win"; break
                       case "Scissors": result="Tie"; break
                    }
        break;
    }

    switch(result)
    {
       case "Loss": loss+=1; break;
       case "Win":  win+=1; break;
       case "Tie":  tie+=1; break;
    }

    displayResult()
    displayScore()
    displayMoves(playerMove,computerMove)
}
function generateComputerMove()
{
    let computerMove=""
    const random=Math.random()
    if(random<=1/3)
        computerMove="Rock"
    else if(random>1/3 && random<=2/3)
        computerMove="Paper"
    else
        computerMove="Scissors"

    return computerMove
}

function resetScore()
{
    win=0
    loss=0
    tie=0 
    result=""
   // console.log(`Scoreboard - win : ${win} loss :${loss} tie : ${tie} `)
   displayScore()
   displayResult()
   displayMoves("","")
}

function displayScore()
{
    //console.log(`Scoreboard - win : ${win} loss :${loss} tie : ${tie} `)
    scorePara.innerHTML=`Scoreboard - win : ${win} loss :${loss} tie : ${tie} `
}

function displayResult()
{
    resultsPara.innerHTML=`Result : ${result}`
}

function displayMoves(playerMove,computerMove)
{
    movesPara.innerHTML=`Player Move ${playerMove}  :  Computer Move ${computerMove}`
}