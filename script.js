function promptMe()
{
var number1=Number(prompt("What is bill, before tax? (Do not include $)"));

var number2=0.07;
var number3=0.05;
var answer1=(number1*number2)+(number1*number3)+(number1)
var answer2=(number1*number2)+(number1*number3)
document.body.querySelector("#tip").innerHTML=answer2
document.body.querySelector("#total").innerHTML=answer1
}