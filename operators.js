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