// var num1 = 3000;

// var num2 = 3.45; 
// var person1 = "ABC PQR";


var Q1 = document.getElementById("q1").value ; 

var quiz1 = 10;
var quiz2 = 12;
var quiz3 = 14;

var avgQ = (quiz1+quiz2+quiz3)/3;

console.log("average of all quizzes: ", avgQ);
document.getElementById("display").innerHTML= 
`The avg of all quizzes:<span class="highlight"> ${avgQ} </span>`;
