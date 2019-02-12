// Task №1


//
//Task №1 Calc
$(document).ready(function() { // Ждём загрузки страницы
	var action;

    $("button.action").click(function () {
        action = $(this).attr('data-action');
    });


    $("input[name=send]").click(function () {
        var first = $("input[name=first]").val() * 1;
        var second = $("input[name=second]").val() * 1;

        var result;

        if (action == '+') {
            result = first + second;
        }
        else if (action == '-'){
            result = first - second;
        }
        else if (action == '*'){
            result = first * second;
        }
        else if (action == '/'){
            result = first / second;
        }
        $("input[name=result]").val(result);
    });


	//Task №2 UpperCase
$('#uppercase-button').click(function () {
  if ($( 'input' ).hasClass( 'lowercase' )) {
    $('input').addClass('uppercase');
    $('input').removeClass('lowercase');
    return;
  }
  if ($( 'input' ).hasClass( 'uppercase' )) {
    $('input').addClass('lowercase');
    $('input').removeClass('uppercase');
    return;
  }
 });


//Task №3 Calc-radio
 $("input[name=calc]").click(function () {
	 var first = $("input[name=num1]").val() * 1;
	 var second = $("input[name=num2]").val() * 1;
	 var radioValue = $("input[name=math]:checked").val();

	 if (radioValue == "+") {
		 result = first + second;
	 }
	 else if (radioValue == '-'){
		 result = first - second;
	 }
	 else if (radioValue == '*'){
		 result = first * second;
	 }
	 else if (radioValue == '/'){
		 result = first / second;
	 }

	 $("input[name=result2]").val(result);
 });
});



//Task №4 Summ

var salaries = {
  "Вася": 100,
  "Петя": 300,
  "Даша": 250
};

var sum = 0;
for (var name in salaries) {
  sum += salaries[name];
}
console.log ( sum );




//Task №5 Max one

"use strict";

var salaries = {
  "Вася": 100,
  "Петя": 300,
  "Даша": 250
};

var max = 0;
var maxName = "";
for (var name in salaries) {
  if (max < salaries[name]) {
    max = salaries[name];
    maxName = name;
  }
}

console.log( maxName || "нет сотрудников" );


//Task №6
var i = 1;
var n = prompt("Task №6 'Enter a Value'", "0");
var num1 = parseInt(n);
var array = [];

function recursion() {
	console.log (i);

	if(i <= num1) {
		array.push(i++);
    console.log(array);
		recursion();
	}
}
recursion();


//Task №7
//for cicle
var n1 = prompt("Task №7 'Enter a Value'", "0");
var num2 = parseInt(n1);

function sumTo1(num2) {
  var sum = 0;
  for (var i = 1; i <= num2; i++) {
    sum += i;
  }
  return sum;
}

console.log( sumTo1(num2) );

//recursion
function sumTo2(num2) {
  if (num2 == 1) return 1;
  return num2 + sumTo2(num2 - 1);
}

console.log( sumTo2(num2) );

window.onload = function () {
	document.getElementById("p1").innerHTML = sum;  //Task №4 innerHTML result
	document.getElementById("p2").innerHTML = maxName; //Task №5 innerHTML result
	document.getElementById("p3a").innerHTML = n; //Task №6 innerHTML n
	document.getElementById("p3").innerHTML = array + "<br>"; //Task №6 innerHTML result
	document.getElementById("p4").innerHTML = sumTo1(num2); //Task №7 innerHTML result for cicle
	document.getElementById("p5").innerHTML = sumTo2(num2); //Task №7 innerHTML result /recursion
};

//Task №8
function printNumbersInterval() {
  var i = 1;
  var timerId = setInterval(function() {
    console.log(i);
    if (i == 20) clearInterval(timerId);
    i++;
  }, 100);
}


function printNumbersTimeout20_100() {
  var i = 1;
  var timerId = setTimeout(function go() {
    console.log(i);
    if (i < 20) setTimeout(go, 100);
    i++;
  }, 100);
}
