// let str = "";
// for (let i = 9; i < 11; i++) {
//   str = i;
//   console.log(str);
// }

// Program to add.
// let sum = 0;
// let n = prompt("Enter the value of n");
// n = Number.parseInt(n);
// for (let i = 0; i < n ; i ++){
//     sum += (i+1);
// }
// console.log("Sum of First " + n + " natural number is " + sum);
// for (let i = 0, getI = () => i; i < 3; i++) {
//   console.log(getI());
// }
// let result = '';
// let i = 0;
// do {
//   i = i + 1;
//   result = result + i;
// } while (i < 5);
// console.log(result);

// let user = prompt("Enter the first number:");
// let user1 = prompt("Enter the second number:");
// console.log(user * user1);

// program to generate a multiplication table

// take input from the user
/* program to generate a multiplication table
upto a range */


let number = prompt("Enter an integer: ");
let start = prompt("From where you start to multiply:");
let range = prompt("How Long you want to multiply: ");

for (let i = start; i <= range; i++) {
  let result = i * number;
  console.log(number +  " x " + i +  " = " + result);
}
