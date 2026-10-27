
const paraElemenet=document.querySelector("#one").innerHTML="be patient, we r fetching your data"
function display(value)
{
    console.log(typeof(value))
    if(typeof(value)==='object')
    {
        let show=""
        show+=`<p> Is Candiate Eligible to Vote : ${value.isEligibe} </p>`
        show+=`<p> Candiate Voter ID : ${value.voterId} </p>`
        show+=`<p> Voting Date : ${value.votingDate} </p>`
        const paraElemenet=document.querySelector("#one").innerHTML=show
    }
   
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
                    resolve({
                        isEligibe:true,
                        voterId :123, 
                        votingDate : "27/10/2026"
                    })
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
