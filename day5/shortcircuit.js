
let fruit=null
let car=undefined
let age=0

// let ans= fruit && car && age     //will return first falsy
// console.log(ans)                 //if all true return last value


let ans= fruit || car || age        //will return first truthy
console.log(ans)                    //if all falsy return last value

let numbers=[10,11,12,13,14]

//display all the odd numbers
// input => [10,11,12,13,14] output=> [11,13]

let oddNumbersList=numbers.filter(n=>n%2==1)
console.log(oddNumbersList)

//display the square of the numbers in oddNumbersList
// input => [11,13] output=> [121,169]
let squareOfoddNumbersList=
oddNumbersList.map(n=>n*n)

console.log(squareOfoddNumbersList)


let ans1=numbers.filter(n=>n%2==1).map(n=>n*n)
console.log(ans1)