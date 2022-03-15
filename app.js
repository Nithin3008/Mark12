var input1=document.querySelector("#input1")
var input2=document.querySelector("#input2")
var input3=document.querySelector("#input3")
var msg1=document.querySelector("#msg")
var button1=document.querySelector("#btn1")


function isTriangle()
{
    var a=Number(input1.value)
    var b=Number(input2.value)
    var c=Number(input3.value)
    var sum=calculateSumOfAngles(a,b,c)
    if(sum===180)
    {
        msg1.innerText="it forms triangle"
    }
    else
    {
        msg1.innerText="it dosen't forms triangle"
    }

}
function calculateSumOfAngles(a1,b1,c1)
{
    return a1+b1+c1;
}
button1.addEventListener("click",isTriangle)