
function display(value)
{
const paraElemenet=document.querySelector("#one").innerHTML=value
}




function voting(age)
{
    return new Promise((resolve,reject)=>{

        setTimeout(
        ()=>{
                if(isNaN(age))
                {
                    reject("Please enter int value only")
                }
                else if(age<0)
                {
                    reject("Please enter valid age")
                }
                else if(age<18)
                {
                    resolve("Not Eligible to vote")
                }
                else
                {
                    resolve("eligible to vote")
                }
        }, 5000
    )
    })
    
}


const age=parseInt(prompt("Enter Age"))
voting(age)
.then(result=>display(result))
.catch(error=>display(error))
.finally(
    ()=>{
        console.log("Task Completed")
    }
)

console.log("Going to office")
console.log("Going to Gym")
