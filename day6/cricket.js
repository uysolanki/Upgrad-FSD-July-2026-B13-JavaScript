import {bat as batsmen,bowl as bowler,ar as allrounder} from './day6b.js'
// import {team} from './day6b.js'
import {team as rcb} from './day6b.js'

import {areaCircle,areaRect} from './day6b.js'
 let bat="Rohit"
// let bowl="Bumrah"
// let ar="Hardik"

console.log(`My Fav batsmen is ${batsmen}`)
console.log(`My Fav bowler is ${bowler}`)
console.log(`My Fav all rounder is ${allrounder}`)



console.log(`My Favi batsmen is ${rcb.bat}`)
console.log(`My Favi bowler is ${rcb.bowl}`)
console.log(`My Favi all rounder is ${rcb.ar}`)

let{bat:indianBat,bowl:indianBowl,ar:indianAr}=rcb

console.log(`My Favir batsmen is ${indianBat}`)
console.log(`My Favir bowler is ${indianBowl}`)
console.log(`My Favir all rounder is ${indianAr}`)


console.log(areaCircle(5))
console.log(areaRect(10,5))