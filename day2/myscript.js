let textBoxElement = document.getElementById("number1")

prime = (number) => {
    for (let i = 2; i < number; i++) {
        if (number % i == 0)
            return 1;
    }
    return 0;
}

// ans=prime(8)
// if(ans==1)
//     console.log("Not Prime")
// else
//     console.log("Prime")


function checkPrime() {
    let textBoxElement = document.getElementById("number1")
    let num = Number(textBoxElement.value)
    //console.log(typeof num)
    ans = prime(num)
    let resultElement= document.getElementById("result")
    // if (ans == 1)
    //     console.log(num, "is Not Prime")
    // else
    //     console.log(num, "is Prime")
    if (ans == 1)
        resultElement.innerHTML=num + " is Not Prime"
    else
        resultElement.innerHTML=num + " is Prime"
}