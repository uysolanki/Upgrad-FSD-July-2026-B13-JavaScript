
function display(value)
{
const paraElemenet=document.querySelector("#one").innerHTML=value
}




function voting(age)
{
    setTimeout(
        ()=>{
                if(isNaN)
                {
                    return("Please enter int value")
                }
                else if(age<0)
                {
                    return("Please enter valid age")
                }
                else if(age<18)
                {
                    return("Not Eligible to vote")
                }
                else
                {
                    return("eligible to vote")
                }
        }, 5000
    )
}


const age=parseInt(prompt("Enter Age"))
console.log(age)
answer=voting(age)
display(answer)