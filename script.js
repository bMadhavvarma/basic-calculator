function add(){
    let num1=parseFloat(document.getElementById("inputElement1").value);
    let num2=parseFloat(document.getElementById("inputElement2").value);
    let sum=num1+num2;
    document.getElementById("resultSection").innerHTML="sum:"+sum;
}

function sub(){
    let num1=parseInt(document.getElementById("inputElement1").value);
    let num2=parseInt(document.getElementById("inputElement2").value);
    let diff=num1-num2;
    document.getElementById("resultSection").innerHTML="difference:"+diff;
}
function mul(){
    let num1=parseInt(document.getElementById("inputElement1").value);
    let num2=parseInt(document.getElementById("inputElement2").value);
    let multiply=num1*num2;
    document.getElementById("resultSection").innerHTML="multiplication"+multiply;
}
function div(){
    let num1=parseInt(document.getElementById("inputElement1").value);
    let num2=parseInt(document.getElementById("inputElement2").value);
    let divide=num1/num2;
    document.getElementById("resultSection").innerHTML="division:"+divide;
}
function exponent(){
    let num1=parseInt(document.getElementById("inputElement1").value);
    let num2=parseInt(document.getElementById("inputElement2").value);
    let exponent=num1**num2;
    document.getElementById("resultSection").innerHTML="exponent"+exponent;
}