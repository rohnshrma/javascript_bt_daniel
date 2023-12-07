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




// var yourName = prompt("Enter your name : ").toLowerCase()


// // if the name is valid
// if (yourName.length >= 3) {
//     // check for the invite
//     if (yourName[0] == "d") {
//         console.log(`Welcome to the party, ${yourName} !`);
//     } else {
//         console.log(`"${yourName}" is not invited to the party`);
//     }
// } else {

//     console.log(`"${yourName}" is not a valid name`)
// }




// switch statement 
// alernative to avoid if else ladder

// var day = parseInt(prompt("Enter any number between 0-6 : "))

// switch (day) {
//     case 0:
//         alert(`Today is Monday`)
//         break;
//     case 1:
//         alert("Today is Tuesday")
//         break;
//     case 2:
//         alert("Today is Wednesday")
//         break;
//     case 3:
//         alert("Today is Thursday")
//         break;
//     case 4:
//         alert("Today is Friday")
//         break;
//     case 5:
//         alert("Today is Saturday")
//         break;
//     case 6:
//         alert("Today is Sunday")
//         break;
//     default:
//         alert("Not a valid day\nPlease choose a number between 0 - 6")
// }



// ticket price system
// 0-4 : free
// 5-10 : $2
// 11-14 : $5
// 15 - : $10 

// var age = parseInt(prompt("Enter your age : "))

// switch (age) {
//     case 0:
//     case 1:
//     case 2:
//     case 3:
//     case 4:
//         alert("You can watch the movie for free !")
//         break
//     case 5:
//     case 6:
//     case 7:
//     case 8:
//     case 9:
//     case 10:
//         alert("Your ticket price is $2")
//         break;
//     case 11:
//     case 12:
//     case 13:
//     case 14:
//         alert("Your ticket price is $5")
//         break;
//     default:
//         alert("Your ticket price is $5")
//         break
// }


// Grading system:
// 90 - 100 : A
// 80 - 90 : B
// 70 - 80 : C
// 60 - 70 : D
// less than 60 : F

// var marks = parseInt(prompt("Enter your marks : "))
// switch (true) {
//     case marks >= 90 && marks <= 100:
//         alert("A")
//         break
//     case marks >= 80 && marks <= 90:
//         alert("B")
//         break
//     case marks >= 70 && marks <= 80:
//         alert("C")
//         break
//     case marks >= 60 && marks <= 70:
//         alert("D")
//         break
//     case marks < 60 && marks >= 0:
//         alert("F")
//         break
//     default:
//         alert("Invalid marks !")
// }

// var month = parseInt(prompt("Enter the month to know the season : "))
// switch (true) {
//     case month == 12 || month == 1 || month == 2:
//         alert("Winter")
//         break;
//     case month == 3 || month == 4 || month == 5:
//         alert("Spring")
//         break;
//     case month == 6 || month == 7 || month == 8:
//         alert("Summer")
//         break;
//     case month == 9 || month == 10 || month == 11:
//         alert("Autum")
//         break;
//     default :
//     alert("Not a valid month")
// }

// var x = parseInt(prompt("Enter the value of x :"))
// var y = parseInt(prompt("Enter the value of y :"))
// var operator = prompt("Enter Operator : ", "+,-,/,*")

// switch (operator) {
//     case "+":
//         alert(`The sum of ${x} and ${y} is ${x + y}`)
//         break
//     case "-":
//         alert(`The difference of ${x} and ${y} is ${x - y}`)
//         break
//     case "*":
//         alert(`The product of ${x} and ${y} is ${x * y}`)
//         break
//     case "/":
//         alert(`The answer of ${x} / ${y} is ${x / y}`)
//         break;
//     default:
//         alert(operator, "Invalid operator")
//         break
// }


// for (initalization ; condition ; increment / decrement){
    // code 
// }

// for (var i = 10; i < 15;i++){
//     console.log("Daniel",i)
// }


var txt = "hello my name is daniel"

// console.log(txt[22]);

for (var i = 0 ; i < txt.length ;i++){
    console.log(txt[i]);
}