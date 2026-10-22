


function printResult(value1)        //value1=900
{
    console.log(value1)
}
function calculateSquare(value,edtech)   //value=30
{                                         //edtech-->printResult
    edtech(value*value)
}
function addition(n1,n2,upgrad)  //upgrad->calculateSquare
{
    let sum=n1+n2                //sum =30
    upgrad(sum,printResult)
}


addition(10,20,calculateSquare)