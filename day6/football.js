// import {bat} from './day6b.js'
// import {bowl} from './day6b.js'

import apple,{bowl as b,bat as c,team} from './day6b.js'


let bowl="Akshata"
let bat="Rutuja"
console.log(`My Fav local player is ${bat}`)
console.log(`My Fav local Bowler is ${bowl}`)

console.log(`My Fav foreign player is ${b}`)
console.log(`My Fav foregn Bowler is ${c}`)

console.log(`My Fav IPL player is ${team.bat}`)
console.log(`My Fav IPL Bowler is ${team.bowl}`)
console.log(`My Fav IPL All rounder is ${team.ar}`)

let {bat:x,bowl:y,ar:z}=team
console.log(`My Fav School player is ${x}`)
console.log(`My Fav School Bowler is ${y}`)
console.log(`My Fav School All rounder is ${z}`)

console.log(apple)