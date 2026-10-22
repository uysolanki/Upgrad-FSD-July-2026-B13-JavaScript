
let clickButton=document.getElementById("click-btn")

function display()
{
    alert("Welcome")
}

function test()
{
    alert("To")
}

function areaCircle(radius)
{
    console.log(Math.PI*radius*radius)
}


clickButton.addEventListener('click',display)
clickButton.addEventListener('click',test)

clickButton.addEventListener('click',()=>alert("Full Stack"))


// const areaButton=document.querySelector("#area-circle-btn")
// areaButton.addEventListener('click',()=>
// {
// let n1=Number(document.querySelector("#input-box").value)
// console.log(n1)
// areaCircle(n1)
// }
// )


const inputBoxElement=document.querySelector("#input-box")
inputBoxElement.addEventListener('keydown',(event)=>{
  if(event.key==="Enter")
  {
    let n1=Number(inputBoxElement.value)
    console.log(n1)
    areaCircle(n1)
  }
})