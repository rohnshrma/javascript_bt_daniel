// arithmetic operators (mathmatical operators )


// console.log(12+3); //addition
// console.log(12-3); //subtraction
// console.log(12*3); //multiplication
// console.log(12/3); //divide (quotient)
// console.log(12%3); //divide (remainder)
// console.log(2**3); //exponent (power)


// increment

var i = 10;

//traditional 
//  i = i + 13  
// shorthand 
// i+=13

// increment the value of i by 1
// i++;

//  console.log(i);

// decrement

// i = i - 1
// i -= 5

// i--

// console.log(i);




// =============================== comparison


// "==" : equals to (compares values)

// console.log(12 == 11);
// console.log(12 == 12);
// console.log(12 == "12"); // true
// console.log("word" == 12); // false


// "===" : strict equals to (compares value and data type)

// console.log(12 === "12"); //false


// "!=" : not equals to (comapres values)

// console.log(12 != 10); //true
// console.log(12 != "12");  // false


// "!== " : strict not equals to (compare values and data type)

// console.log(12 !== "12"); // true


// ">" : greater than

// console.log(12 > 10);

// "<" : smaller than
// console.log(12 < 10);


// ">" : greater than
// console.log(10 >= 10);

// "<" : smaller than
// console.log(10 <= 10);



// ========================== logical operators
// and (&&) , or (||) and not (!)


// "&&" logical operator expects both side to be true 

// // true && true = true
// console.log(12 > 10 && 10 < 12);
// // true && false = false
// console.log(12 > 10 && 10 > 12);
// // false && true = false
// console.log(12 < 10 && 10 < 12);
// // false && false = false
// console.log(12 < 10 && 10 > 12);

// "||" logical operator expects any one side to be true 

// // true || true = true
// console.log(12 > 10 || 10 < 12);
// // true || false = true
// console.log(12 > 10 || 10 > 12);
// // false && true = true
// console.log(12 < 10 || 10 < 12);
// // false && false = false
// console.log(12 < 10 || 10 > 12);



// // reverse "!"
// console.log(!true);
// console.log(12 > 10); // true
// console.log(!12 > 10); // true


// control flow statements
// - if ,else if and else statements
// - switch statements
// - loops : for, while and do while loop




// - if ,else if and else statements

// if block is used to handle the true part of the condition
// run a code only if the condition is true

// if(condition){
// code 
// }


// var age = parseInt(prompt("Enter your age : "))
// console.log(age);
// console.log(typeof age);

// if (age >= 18){
// the code inside of the if block runs if the condition is true
// console.log(`Eligible to drive as your age is ${age}`);
// }else{
// else block does not take any condition , it is only there to handle the false part of the condition
// the code inside of the else block runs if all the conditions above are false 
// console.log(`Not Eligible to drive as your age is ${age}`);
// }

// every condition afterwards should be inside of an "else if" block
// if (age >= 60) {
//     console.log(`Not Fit to drive as your age is ${age}`);
// }
// else if (age >= 18) {
//     console.log(`Eligible to drive as your age is ${age}`);
// } else {
//     console.log(`Not Eligible to drive as your age is ${age}`);
// }

// create variable called today , ask the value as a number between 0 - 6
// 0 : sunday
// 1 : monday
// ...




var yourName = prompt("Enter your name : ").toLowerCase()


// if the name is valid
if (yourName.length >= 3) {
    // check for the invite
    if (yourName[0] == "d") {
        console.log(`Welcome to the party, ${yourName} !`);
    } else {
        console.log(`"${yourName}" is not invited to the party`);
    }
} else {

    console.log(`"${yourName}" is not a valid name`)
}