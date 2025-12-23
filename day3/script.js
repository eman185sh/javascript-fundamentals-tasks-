// Function to calculate sum of even and odd numbers up to 'num'
function sumEvenOdd(num) {
  let sumEven = 0;
  let sumOdd = 0;

  for (let i = 0; i <= num; i++) {
    if (i % 2 === 0) {
      sumEven += i; // Add to even sum
    } else {
      sumOdd += i; // Add to odd sum
    }
  }

  // Output
  alert("Sum of odd: " + sumOdd + "\nSum of even: " + sumEven);
  console.log("Sum of odd:", sumOdd);
  console.log("Sum of even:", sumEven);
  document.write("<p>Sum of odd: " + sumOdd + "</p>");
  document.write("<p>Sum of even: " + sumEven + "</p>");
}

// Ask user for input
let userInput = prompt("Enter a number:");
userInput = Number(userInput); // Convert string to number

// Call the function with user's number
sumEvenOdd(userInput);
