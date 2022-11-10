// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// We create a variable and set the value equal to 1.
// We then add 1 to the value and save it to itself making the variable equal to 2.
// Then we set up a conditional statement that checks if the variable we set up is greater than or equal to 2, and if it is we console.log 'yes'.
// In this case the variable "number" has a value of 2 so the code would console log the string 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We set up a variable "name" and set it equal to the string 'Dane'. 
// We then set up a conditional that checks if the variable "name" is equal to the string 'Mary', and if it does it console logs 'Hi, Mary!'.
// If that condition isn't met it then goes to the "else" statement and console logs the string 'How do you do?'.
// The code will run and console log 'How do you do?' because the first condtional isn't met so it will go to the else statement.

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// First we establish 2 variables one called "secret" and we don't set a value, the next is "code" and we put it equal to the value of 123.
// We then set up 2 conditional statements one checks if the variable "code" equals the value 123 and if it does the variable "secret" is given the string 'super'
// and the variable "code" has its variable multiplied by 2 and then saved back into itself. 
// Then we set up another conditional that checks if the variable "code" is greater than 250, and if so the variable "secret" is given the string 'duper'.
// We then console log the variable secret to get the answer "super".
// The code runs and since we assigned code to 123 the first conditional is met and the variable secret is set to super, so when we console log the variable secret we get "super".
//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// First we create 3 variables, first one is called "isStudent" and we give it the boolean value "true", the next variable is called "age" and we give it the value 34, the last variable is named "zip" and we set the value to 55407.
// We then set up a conditional that checks if variable "isStudent" is equal to true and if the variable "zip" is equal to the value 80000. If both are true we console log the string "You're a student on the West Coast!".
// If that conditional isn't met we then ask if the variable "isStudent" is false or the variable "age" is less then 30 if either of these conditions are met we console log the string "What are your hobbies?"
// If that conditional isn't met we then ask if the variable "isStudent" is true, and if so we console log the string "Welcome to Prime!"
// If none of these conditionals are met we console log the string "How about the weather?".
// The code would run through the conditionals and since the only conditional that is met is the 3rd one it would console log "Welcome to Prime!".
//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

// colorOne should be 'blue' and coloreTwo should be 'red'
/*
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;
// colorTwo needs to be set to the string 'purple' too.
if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
// const is not a variable and needs to be changed to "let" function.
let temp = 40;
const time = 4;
// replace || with && so both conditions need to be met to console log 'throw away the food!'.
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
// const is not a variable and needs to changed to the function "let".
let age = 21;
const minAge = 21;
// the console logs need to be switched, so if age is greater than or equal to minAge it console logs "enter".
if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

