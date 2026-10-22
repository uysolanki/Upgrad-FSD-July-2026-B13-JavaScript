
let clickButton=document.getElementById("click-btn")

function display()
{
    alert("Welcome")
}

function test()
{
    alert("To")
}


clickButton.addEventListener('click',display)
clickButton.addEventListener('click',test)

clickButton.addEventListener('click',()=>alert("Full Stack"))

