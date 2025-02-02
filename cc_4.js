// Task 1: If Statements - Customer Discounts

let purchaseAmount = 100;// Enter the amount of purchase
if (purchaseAmount > 100) 
purchaseAmount = 90;// Enter the amount of purchase
let finalAmount = purchaseAmount - 20;// Enter the amount of purchase
console.log(`Final amount after discount: $${finalAmount}`); // Output: Final amount after discount: $80


// Task 2: For Loop - Sales Report

let sales = [100, 230, 55, 75, 120];// Enter the sales data
let totalSales = 0;

for (let i = 0; i < sales.length; i++) {
  console.log(`Total Sales/ day: $${sales[i]}`)// Output: day
  }

// Task 3: While Loop - Inventory Depletion

let stock = 10// Enter the initial stock
while (stock > 0) {
  stock--;// Enter the initial stock
  console.log(`Stock available: ${stock}`);// Output: Stock available
}
console.log('Out of stock');// Output: Out of stock

// Task 4: Do-While Loop - Customer Survey

let responses = 0;// Enter the initial responses
do {
    console.log(`Customer response: ${responses}`);// Output: Customer response
    responses++;// Enter the initial responses
} while (responses <= 3);
