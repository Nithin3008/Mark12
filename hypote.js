var side1=document.querySelector("#side1")
var side2=document.querySelector("#side2")
var msg=document.querySelector("#msg1")
var btn=document.querySelector("#btn1")

function handler()
{
    var a=Number(side1.value)
    var b=Number(side2.value)
    var result=Math.sqrt((a*a)+(b*b))
    console.log(result)
    msg.innerText="the length of hypotneuse is "+result
}

btn.addEventListener("click",handler)