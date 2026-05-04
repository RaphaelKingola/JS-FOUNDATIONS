/*1. Create two number variables and calculate their sum, difference, product, and quotient. Display all results*/
let num1 = 20;
let num2 = 5;
console.log("Sum:", num1 + num2); // Solution 25
console.log("Difference:", num1 - num2); // Solution 15
console.log("Product:", num1 * num2); // Solution100
console.log("Quotient:", num1 / num2); // Solution 4

/*2. Find the remainder when 17 is divided by 5 and display the result.*/
let remainder = 17 % 5;
console.log("Remainder:", remainder); // Solution 2
/*3. Create a variable x with a value of 10. Add 5 to it using a shorthand operator, then multiply the result by 2 using another shorthand operator. Display the final value.*/
let x = 10;
x += 5;
x *= 2;
console.log("Final value of x:", x); // Solution 30

/*4.  Perform the following operations and display the results:
   - A string "5" plus a number 2
   - A string "5" minus a number 2 */
let result1 = "5" + 2;
let result2 = "5" - 2;
console.log("Result 1:", result1); // Solution "52"
console.log("Result 2:", result2); // Solution 3

/*5.Convert a string "100" into a number and display the result. Then convert a number 50 into a string and display the result.*/
let strNum = "100";
let num = Number(strNum);
console.log("Converted string to number:", num); // Solution 100
let numToStr = 50;
let str = String(numToStr);
console.log("Converted number to string:", str); // Solution "50"
/*6.  Compare the values 5 and "5" using both loose equality and strict equality. Display both results.*/
console.log("loose equality", 5 == 5); // Solution true
console.log("strict equality", 5 === "5"); // Solution false
/*7.Create variables for principal, rate, and time. Calculate the simple interest and display the result.*/

let principal = 1000;
let rate = 5;
let time = 2;
let simpleInterest = (principal * rate * time) / 100;
console.log("Simple Interest:", simpleInterest); // Solution 100

/*---------------------------------------TASKS ON CONDITIONS---MAY 4TH 2026------------------------------------*/
/*1. Mobile Airtime Purchase Validator
   A telecom system needs to validate airtime purchases. Write a function that:
   - Takes phoneNumber, amount, and balance
   - Checks:
     - Phone number must be 10 digits
     - Amount must be greater than 0
     - User must have enough balance
   - Deducts the amount if valid and returns the new balance
   - Otherwise returns an error message */

function validateAirtimePurchase(phoneNumber, amount, balance) {
  // First level of validation
  if (phoneNumber.length !== 10) {
    return "Error: Phone number must be 10 digits.";
  }
  if (amount <= 0 || amount > balance) {
    return "Error: Invalid amount or insufficient balance.";
  }

  // Define the helper function for the calculation
  function calculateDeduction(phoneNumber, amount, balance) {
    const newBalance = balance - amount;
    return newBalance;
  }

  // CRITICAL STEP: Call the inner function and return its result!
  return calculateDeduction(phoneNumber, amount, balance);
}

// Test cases
console.log(validateAirtimePurchase("1234567890", 50, 100));
console.log(validateAirtimePurchase("123456789", 50, 100));
console.log(validateAirtimePurchase("1234567890", -10, 100));
console.log(validateAirtimePurchase("1234567890", 150, 100));
