
let fruit=null
let car=undefined
let age=0

// let ans= fruit && car && age     //will return first falsy
// console.log(ans)                 //if all true return last value


let ans= fruit || car || age        //will return first truthy
console.log(ans)                    //if all false