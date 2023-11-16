// how to check the data type of any value ?
// "typeof" keyword returns the data type of the value / variable 



// var mess = "abc is a name";

// console.log(typeof mess);


// console.log(typeof 123);


// console.log(typeof true);


// a string is a sequence of characters (alphabets, numbers and special symbols 
// (including whitespace)) enclosed in single ('') or double ("") quotes



// console.log(typeof "hello world");
// console.log(typeof "1234");
// console.log(typeof "rohan@124");
// console.log(typeof 123);
// console.log(typeof "true");


// no matter what typeof value you take as input using prompt , the data type of it will be string by default

// var age = prompt("Enter your age : ")
// console.log(typeof age)

// var age = parseInt(prompt("Enter your age : "))
// console.log(typeof age)




// var first_name = prompt("Enter your first name ")
// var last_name = prompt("Enter your last name ")
// var age = prompt("Enter your age ")

// concatenation
// var mess = "hello world my name is " + first_name + " " + last_name + " and my age is " + age



// template literal => backticks (``) to create a template literal
// ${} to insert js expression / variables

// insertion / injection

// var mess = `hello world my name is ${first_name} ${last_name} and my age is ${age*2}`

// console.log(mess);


// indexing => is counting starting from "0";
// to use indexing we use [] square brackets





// first character of the string is always on the  [0] position
// last character of the string is always on the  [string.length - 1] position


// var yourName = "john doe";

// var length_of_name = yourName.length

// console.log(yourName.length);

// console.log(yourName[0]);
// console.log(yourName[1]);

// // console.log("the last character is : " + yourName[5]);
// console.log("the last character is : " + yourName[ length_of_name - 1]); //



// string methods => functions providing extra functionality to work with strings

// returns a new string b repeating your string , specified number of times
var mess = "Hello World this is Daniel"


// ṛeturn a new string by replacing the existing string with the new substring

// console.log(mess.replace("Hello" , "Bye Bye")); // what to replace , new value


// var fName = prompt("Enter your full Name : ")

// console.log(fName)
// console.log(fName.length)

// return a new string by removing leading and trailing whitespaces (not in between)

// var clean_fName = fName.trim()
// console.log(clean_fName);
// console.log(clean_fName.length);



// returns true if the substring is included in your string , else returns false

// console.log(mess.includes("llo"))

// console.log(mess.includes("bye"))



// console.log(mess.includes("i",10)); // searchString , position (inclusive)
// console.log(mess.includes("W",10)); // searchString , position (inclusive)



// console.log(mess.startsWith("abc")); // substring
// console.log(mess.startsWith("He")); // substring
// console.log(mess.startsWith("f")); // substring

// console.log(mess.startsWith("a",4)); // substring , startPosition(inclusive)
// console.log(mess.startsWith("o",4)); // substring , startPosition(inclusive)


// return the index of the first occurance of the specified string
// console.log(mess.indexOf("a")); //searchString
// console.log(mess.indexOf("a",10)); // searchString , position(inclusive)


// console.log(mess.repeat(3));


// returns a new string with all characters in uppercase

// log is directly
// not reusable
// console.log(mess.toUpperCase())


// reusable
// var upper_mess = mess.toUpperCase()
// console.log(upper_mess);




// returns a new string with all characters in lowercase

// console.log(mess.toLowerCase());




// Returns the character at the specified index.
// console.log(mess.charAt(4));

// var chat_at_4 = mess.charAt(4);

// // console.log(chat_at_4);
// console.log(`the character on the 4th index is : ${chat_at_4}`);
// console.log("the character on the 4th index is : " + chat_at_4);


