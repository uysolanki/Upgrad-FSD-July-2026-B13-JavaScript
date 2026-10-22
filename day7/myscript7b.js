


function printResult(value,edtech)
{
    console.log(value)
}
function calculateSquare(value,edtech)
{
    edtech(value*value)
}
function addition(n1,n2,upgrad)
{
    let sum=n1+n2
    upgrad(sum,printResult)
}


addition(10,20,calculateSquare)