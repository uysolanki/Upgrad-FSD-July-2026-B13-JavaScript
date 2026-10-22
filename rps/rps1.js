const rockButton=document.querySelector("#rock-btn")
const paperButton=document.querySelector("#paper-btn")
const scissorsButton=document.querySelector("#scissors-btn")

rockButton.addEventListener('click',()=>playGame("Rock"))
paperButton.addEventListener('click',()=>playGame("Paper"))
scissorsButton.addEventListener('click',()=>playGame("Scissors"))

const movesPara=document.querySelector("#moves-para")
function playGame(playerMove)
{
    let computerMove=generateComputerMove()
    console.log(`Player Move ${playerMove}  :  Computer Move ${computerMove}`)
    movesPara.innerHTML=`Player Move ${playerMove}  :  Computer Move ${computerMove}`
    let result=""
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

    console.log(`Result : ${result}`)
}
function generateComputerMove()
{
    computerMove=""
    const random=Math.random()
    if(random<=1/3)
        computerMove="Rock"
    else if(random>1/3 && random<=2/3)
        computerMove="Paper"
    else
        computerMove="Scissors"

    return computerMove
}