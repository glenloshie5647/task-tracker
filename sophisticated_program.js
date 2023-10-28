Here is a complex JavaScript code file named "sophisticated_program.js" that demonstrates a fictional banking system:

```javascript
/* sophisticated_program.js */

// Class representing a Bank
class Bank {
  constructor(name) {
    this.name = name;
    this.customers = [];
    this.accounts = [];
  }

  addCustomer(customer) {
    this.customers.push(customer);
  }

  openAccount(customer, initialDeposit) {
    const account = new Account(customer, initialDeposit);
    this.accounts.push(account);
    return account;
  }

  getAccountsByCustomer(customer) {
    return this.accounts.filter(account => account.customer === customer);
  }

  getTotalBalance() {
    let totalBalance = 0;
    for (const account of this.accounts) {
      totalBalance += account.balance;
    }
    return totalBalance;
  }
}

// Class representing a Customer
class Customer {
  constructor(name) {
    this.name = name;
  }
}

// Class representing an Account
class Account {
  constructor(customer, initialDeposit) {
    this.customer = customer;
    this.balance = initialDeposit;
  }

  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
    }
  }
}

// Create a new bank
const myBank = new Bank("MyBank");

// Create customers
const customer1 = new Customer("John Doe");
const customer2 = new Customer("Jane Smith");

// Add customers to the bank
myBank.addCustomer(customer1);
myBank.addCustomer(customer2);

// Open accounts for customers
const account1 = myBank.openAccount(customer1, 1000);
const account2 = myBank.openAccount(customer1, 500);
const account3 = myBank.openAccount(customer2, 2000);

// Perform transactions
account1.deposit(500);
account2.withdraw(200);
account3.deposit(1000);
account3.withdraw(500);

// Get all accounts of a specific customer
const johnsAccounts = myBank.getAccountsByCustomer(customer1);

// Output results
console.log(`Bank Name: ${myBank.name}`);
console.log(`Total Balance: ${myBank.getTotalBalance()}`);
console.log(`John's Accounts:`);
for (const account of johnsAccounts) {
  console.log(`Account Balance: ${account.balance}`);
}
```

This code demonstrates a banking system where there is a Bank class that manages customers, accounts, and transactions. It consists of three classes - Bank, Customer, and Account. The Bank class handles adding customers, opening accounts, and calculating the total balance. The Customer class represents individual customers, and the Account class represents bank accounts with deposit and withdrawal functionalities.

The code creates a new bank, adds customers to it, opens accounts for those customers, performs transactions, and retrieves accounts for a specific customer. Finally, it outputs the bank name, total balance, and account balances of a specific customer.

Note that this is a simplified example for demonstration purposes and would require further enhancements for a real-world banking system.