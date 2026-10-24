const rockButton=document.querySelector("#rock-btn")
const paperButton=document.querySelector("#paper-btn")
const scissorsButton=document.querySelector("#scissors-btn")
const resetButton=document.querySelector("#reset-btn")
const autoplayButton=document.querySelector("#autoplay-btn")

const movesPara=document.querySelector("#moves-para")
const resultsPara=document.querySelector("#result-para")
const scorePara=document.querySelector("#score-para")

rockButton.addEventListener('click',()=>playGame("Rock"))
paperButton.addEventListener('click',()=>playGame("Paper"))
scissorsButton.addEventListener('click',()=>playGame("Scissors"))
resetButton.addEventListener('click', resetScore)
autoplayButton.addEventListener('click', toggleAutoplayMode)
let win=0
let loss=0
let tie=0

let score= JSON.parse(localStorage.getItem('scknScore')) || {win,loss,tie}
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
       case "Loss": score.loss+=1; break;
       case "Win":  score.win+=1; break;
       case "Tie":  score.tie+=1; break;
    }
    localStorage.setItem('scknScore', JSON.stringify(score)); 

    displayMoves(playerMove,computerMove)
    displayResult()
    displayScore()
   
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
    score.win=0
    score.loss=0
    score.tie=0 
    localStorage.removeItem('scknScore')
    result=""
   
   displayScore()
   displayResult()
   displayMoves("play","play")
}

function displayScore()
{
    scorePara.innerHTML=`Scoreboard - win : ${score.win} loss :${score.loss} tie : ${score.tie} `
}

function displayResult()
{
    resultsPara.innerHTML=`Result : ${result}`
}

function displayMoves(playerMove,computerMove)
{
    movesPara.innerHTML=`Player Move <img alt="play" class="small-move-icon" src="../images/${playerMove}-emoji.png" />  :  Computer Move  <img alt="play" class="small-move-icon"  src="../images/${computerMove}-emoji.png" />`
}

let isAutoMode=false  //true //false
let intervalID
function toggleAutoplayMode()
{
    if(isAutoMode==false)
    {
        isAutoMode=true
        autoplayButton.textContent="Autoplay Mode ON"
        autoplayButton.style.backgroundColor="green"
        intervalID=setInterval(
            ()=>{
            let computerGeneratedPlayerMove= generateComputerMove() 
            playGame(computerGeneratedPlayerMove)  
            },2000
        )
        
    }
    else
    {
        clearInterval(intervalID)
        isAutoMode=false
        autoplayButton.textContent="Autoplay Mode OFF"
        autoplayButton.style.backgroundColor="red"
    }

}