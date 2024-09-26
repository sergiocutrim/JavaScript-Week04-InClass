/*Qs1. Get user to input a number using prompt(“Enter a number:”). Check if the number is
a multiple of 5 or not.

let userInput = prompt("Input any number:");
userInput = Number(userInput);

if (userInput%5 == 0){
console.log("The number is a multiple of 5");
} else {
    console.log("The number is not a multiple of 5");
}*/

/* Qs2. Write a code which can give grades to students according to their scores:
80-100, A
70-89, B
60-69, C
50-59, D
0-49, F

let gradeInput = prompt ("Input the grade:");
gradeInput = Number(gradeInput);
if (gradeInput >=0 && gradeInput <= 49){
    console.log("Grade F");
} else if (gradeInput >=0 && gradeInput <= 59){
    console.log("Grade D");
} else if (gradeInput >=0 && gradeInput <= 69){
    console.log("Grade C");
} else if (gradeInput >=0 && gradeInput <= 89){
    console.log("Grade B");
} else if (gradeInput >=0 && gradeInput <= 100){
    console.log("Grade A");
} else {
    console.log("Error")
}

*/

/*Calculator Challenge

Create a function called `calculator` that takes three parameters: 
`num1`, `num2` and `operator`. The operator can be `+`, `-`, `*` or `/`. 
The function should return the result of the calculation. If anything other than the four operators is 
passed in, the function should return an error message. */

/*
function calculator(num1, num2, operator) {
    let resultOfCalculation;
    switch (operator) {
      case '+':
        resultOfCalculation = num1 + num2;
        break;
      case '-':
        resultOfCalculation = num1 - num2;
        break;
      case '*':
        resultOfCalculation = num1 * num2;
        break;
      case '/':
        resultOfCalculation = num1 / num2;
        break;
      default:
        resultOfCalculation = 'Invalid operator';
    }
    console.log(resultOfCalculation);
    return resultOfCalculation;
    }
    
    calculator(10,5,"/"); //return is 2
    calculator(50,20,"("); //return is invalid operator
*/

/*FizzBuzz Challenge
Instructions:**
- Print/log the numbers from 1 to 100
- For **multiples of three** print "Fizz" instead of the number
- For **multiples of five** print "Buzz"
- For numbers which are **multiples of both three and five** print "FizzBuzz". */

for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 ==0) {
    	console.log("FizzBuzz");
    } else if (i % 3 == 0) {
    	console.log("Fizz");
    } else if (i % 5 == 0) {
    	console.log("Buzz");
    } else {
    	console.log(i);
    }
}





