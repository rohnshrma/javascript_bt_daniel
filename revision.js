// console.log(12 > 10)
// console.log(12 < 10)


// var age = 10

// if (age > 18){
//     console.log("eligible")
// }else{
//     console.log("not eligible for driving");
// }




// == /equals : compares the values
console.log("0" == 0)

// strict equals to : compare the values and data type
console.log("0" === 0)




// var num = parseInt(prompt("Enter any number between 0-6 : "))


// if (num === 0) {
//     console.log("Sunday");
// } else if (num === 1) {
//     console.log("Monday");
// } else if (num === 2) {
//     console.log("Tuesday");
// } else if (num === 3) {
//     console.log("Wednesday");

// } else if (num === 4) {
//     console.log("Thursday");
// } else if (num === 5) {
//     console.log("Friday");
// } else if (num === 6) {
//     console.log("Saturday");
// }else{
//     console.log("Invalid Number");
// }



// var month = parseInt(prompt("Enter number from 1-12 : "))
// switch(month){
//     case 1:
//         console.log("january")
//         break
//         case 2:
//         console.log("feburary")
//         break

//         case 3:
//             console.log("march")
//             break
//         case 4:
//             console.log("april")
//             break
//         case 5:
//             console.log("may")
//             break
//         case 6:
//             console.log("june")
//             break
//         case 7:
//             console.log("july")
//             break
//         case 8:
//             console.log("august")
//             break
//         case 9:
//             console.log("september")
//             break
//         case 10:
//             console.log("october")
//             break
//         case 11:
//             console.log("november")
//             break
//         case 12:
//             console.log("december")
//             break
//         default:
//             console.log("not a valid month")
//             break
// }




// var age = parseInt(prompt("Enter your age : "))
// switch (age) {
//     case 1:
//     case 2:
//     case 3:
//     case 4:
//         console.log("you can watch the movie for free")
//         break;
//     case 5:
//     case 6:
//     case 7:
//     case 8:
//     case 9:
//     case 10:
//         console.log("Ticket Price : $2")
//         break;
//     case 11:
//     case 12:
//     case 13:
//     case 14:
//         console.log("Ticket Price : $5")
//         break;
//     default:
//         console.log("Ticket Price : $10")
// }


// for(initialization; condition ; update(increment/decrement)){
// code to be executed
// }


// for(var i = 1 ; i < 10;i++){
//     console.log("daniel",i)
// }


for(var i = 1 ;i <=50; i++){
    if(i % 2 == 0){
        console.log(i , "=> Even")
    }else{

        console.log(i , "=> Odd")
    }
}