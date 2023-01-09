function saySomething(whatToSay) {
    window.alert(whatToSay);
  }
  
function add(number1, number2) {
    return number1 + number2;
  }

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    return number1 / number2;
}


const number1 = parseInt(prompt("Enter a number:"));
const number2 = parseInt(prompt("Enter another number:"));
;

/*window.alert("The addition of your two numbers is: " + add(number1, number2));
window.alert("The subtraction of your two numbers is: " + subtract(number1, number2));
window.alert("The multiplication of your two numbers is: " + multiply(number1, number2));
window.alert("The division of your two numbers is: " + divide(number1, number2));*/

window.alert(number1 + " + " + number2 + " = " + add(number1, number2));

window.alert(number1 + " - " + number2 + " = " + subtract(number1, number2));
window.alert(number1 + " * " + number2 + " = " + multiply(number1, number2));
window.alert(number1 + " / " + number2 + " = " + divide(number1, number2));
;
