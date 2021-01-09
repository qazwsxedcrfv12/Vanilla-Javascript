
function calculate(a)
{
    var c=parseFloat(a/100);
    return c.toFixed(2);
}

var a=prompt("Enter your height in cm",0);

var b=calculate(a);

alert("Your height in m is "+ b +" m");

console.log(b);