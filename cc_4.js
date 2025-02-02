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

// Task 5: For-In Loop - Employee Information

let employee = {
    name: "Alice",
    position: "Manager",
    salary: 75000
    };// Enter the employee information
for (let key in employee) {
    console.log(`${key}: ${employee[key]}`);// Output: Employee information
}

// Task 6: For-Of Loop - Product Listings

let products = ["Laptop", "Mouse", "Keyboard"];// Enter the product list
for (let product of products) {
    console.log(`Product: ${product}`);// Output: Product list
}

// Task 7: ForEach() Method - Order Processing

let orders = [101, 102, 103];// Enter the order numbers
orders.forEach(function(order) {
    console.log(`Order Number: ${order}`);// Output: Order numbers
});

// Task 8: Function Declaration - Tax Calculation

function calculateTax(amount, taxRate) {
    let tax = amount * taxRate;// Enter the amount and tax rate
    return tax;
}
let taxAmount = calculateTax(100, 0.1);// Enter the amount and tax rate
console.log(`Tax Amount: $${taxAmount}`);// Output: Tax amount

// Task 9: Function Expression - Discount Application

function applyDiscount(price, discountPercentage) {
    let discount = price * discountPercentage;// Enter the price and discount percentage
    return discount;
}
let discountedAmount = applyDiscount(100, 0.2);// Enter the price and discount percentage
console.log(`Discounted Amount: $${discountedAmount}`);// Output: Discounted amount

// Task 10: Arrow Function - Loyalty Points

function calculatePoints(purchaseAmount) {
    let points = purchaseAmount * 0.1;// Enter the purchase amount
    return points;
}
let loyaltyPoints = calculatePoints(200);// Enter the purchase amount
console.log(`Loyalty Points: ${loyaltyPoints}`);// Output: Loyalty points