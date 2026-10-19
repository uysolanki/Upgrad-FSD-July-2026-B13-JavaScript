let s1={
"rno":1,            //number as a value
"sname":"Virat",    //string as a value
"per":78.5          //number as a value
}
console.log("I like "+s1.sname+" He has scored " +s1.per+ " percentage")
console.log(`I like ${s1.sname} he has scored ${s1.per} percentage`)
console.log(typeof s1.sname)

s1.age=23
console.log(s1)

console.log("Shoheb")
console.log(delete s1.pre)
console.log("Momin")
console.log(s1)

let s2={
rno:2,
sname:"Rohit",
per:88.5
}

console.log(s2)

let arr=[1,"Apple", 20.5]
console.log(arr)


player1={
    jno:18,
    pname:"Virat",
    mp:100,
    rs:5000,
    mom:100,
    "mom-name":"Saroj",
    avg: function calculateAvg()
                {
                    return this.rs/this.mp
                }
}

let name=99
console.log(typeof player1.avg)
let avg1=player1.avg()
console.log(avg1)
console.log(player1["mom-name"])

cars=["Audi","BMW","Merc"]
//Traditonal For loop --> break
for(let i=0;i<cars.length;i++)
{
    console.log(`I like ${cars[i]}`)
    if(i==1)
        break
}

//for of loop
for(let car of cars)   //of to iterate on a collection
{
   console.log(`I like ${car}`)
}

//for in loop  iterate over an object

for(let key in player1)
{
console.log(` ${key} , ${player1[key]}`)
}


for(let key in player1)
{
console.log(key+ `,${player1[key]}`)
}

let arr1=[10,20,30,40,50]
for(let n of arr1)
    console.log(`I like number ${n}`)

let sum=0
for(let n of arr1)
    sum+=n
console.log(sum)

arr1.forEach(
    (n,index)=>console.log(`I like number ${index}`)
)

for(let n=0; n<arr1.length;n++)
{
 console.log(`I like number ${arr1[n]}`)
 if(n==3)
 break
}

arr1.forEach(
    (n,index)=>{
        if(index==3)
        return
        console.log(`I like number ${arr1[index]}`) 
    }
)
   