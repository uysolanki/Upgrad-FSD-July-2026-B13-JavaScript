
console.log("Hi")
player={
    jno:18,
    pname:undefined,
    mp:100,
    rs:5000
}


// let jno=45
// let pname="Rohit"
// let mp=200
// let rs=6000

// player1={jno,pname,mp,rs}
// console.log(player1)

//object destructuring with all keys
// let {jno,pname,mp,rs}=player
// console.log(jno)
//

//object destructuring with selective keys
// let {mp,rs}=player
// console.log(mp)

//object destructuring with default values
// let {mp,rs,centuries=1,add="King", pname="Virat"}=player
// console.log(pname)


// object destructuring with custom variable name
let {mp:matchesPlayed,rs:runsScored}=player
console.log(matchesPlayed)


let cars=["Audi","BMW","Mercedes","Honda"]
let [a,b,d]=cars
console.log(d)

//truthy falsy
//true  false
//

//truthy
let q=-1            //non zero value  1, -1
console.log(Boolean(q))
let fruit=""        //non empty string
let bikes=["honda","suzuki"]        //empty array is also truthy
let student={rno:1}      //empty object is also truthy
console.log(Boolean(student))

if(student)
    console.log("Hi")
else
    console.log("bye")