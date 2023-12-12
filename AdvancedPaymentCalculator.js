/* 
   Filename: AdvancedPaymentCalculator.js
   Description: This JavaScript code calculates advanced payment details.
*/

// Constants
const INTEREST_RATE = 0.05;
const MONTHS_IN_YEAR = 12;

// Function to format currency values
function formatCurrency(value) {
  return '$' + value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

// Function to calculate monthly payment
function calculateMonthlyPayment(principal, interestRate, numberOfYears) {
  const monthlyInterestRate = interestRate / MONTHS_IN_YEAR;
  const numberOfPayments = numberOfYears * MONTHS_IN_YEAR;
  const discountFactor = (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1) /
    (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments));
  return principal / discountFactor;
}

// Function to calculate advanced payment details
function calculateAdvancedPaymentDetails(principal, interestRate, numberOfYears) {
  const monthlyPayment = calculateMonthlyPayment(principal, interestRate, numberOfYears);
  const totalPayment = monthlyPayment * numberOfYears * MONTHS_IN_YEAR;
  const totalInterest = totalPayment - principal;

  // Output the advanced payment details
  console.log('Advanced Payment Details:');
  console.log('Principal Amount: ' + formatCurrency(principal));
  console.log('Interest Rate: ' + (interestRate * 100) + '%');
  console.log('Number of Years: ' + numberOfYears);
  console.log('Monthly Payment: ' + formatCurrency(monthlyPayment));
  console.log('Total Payment: ' + formatCurrency(totalPayment));
  console.log('Total Interest: ' + formatCurrency(totalInterest));
}

// Example usage
calculateAdvancedPaymentDetails(100000, INTEREST_RATE, 5);