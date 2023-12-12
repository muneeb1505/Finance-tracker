// Variables to store income, expenses, and totals
let incomeList = [];
let expensesList = [];
let totalIncome = 0;
let totalExpenses = 0;

// DOM elements
const incomeListElement = document.getElementById("income-list");
const expensesListElement = document.getElementById("expenses-list");
const totalIncomeElement = document.getElementById("total-income");
const totalExpensesElement = document.getElementById("total-expenses");
const balanceElement = document.getElementById("balance");

// Function to calculate and update totals
function updateTotals() {
    totalIncome = incomeList.reduce((total, income) => total + income.amount, 0);
    totalExpenses = expensesList.reduce((total, expense) => total + expense.amount, 0);
    const balance = totalIncome - totalExpenses;

    totalIncomeElement.textContent = totalIncome.toFixed(2);
    totalExpensesElement.textContent = totalExpenses.toFixed(2);
    balanceElement.textContent = balance.toFixed(2);
}

// Function to add an income entry
function addIncome() {
    const incomeAmount = parseFloat(prompt("Enter income amount:"));
    if (!isNaN(incomeAmount)) {
        const incomeEntry = { amount: incomeAmount };
        incomeList.push(incomeEntry);
        const incomeItem = document.createElement("div");
        incomeItem.textContent = `Income: $${incomeAmount.toFixed(2)}`;
        incomeListElement.appendChild(incomeItem);
        updateTotals();
    }
}

// Function to add an expense entry
function addExpense() {
    const expenseAmount = parseFloat(prompt("Enter expense amount:"));
    if (!isNaN(expenseAmount)) {
        const expenseEntry = { amount: expenseAmount };
        expensesList.push(expenseEntry);
        const expenseItem = document.createElement("div");
        expenseItem.textContent = `Expense: $${expenseAmount.toFixed(2)}`;
        expensesListElement.appendChild(expenseItem);
        updateTotals();
    }
}

// Event listeners for buttons
document.getElementById("add-income").addEventListener("click", addIncome);
document.getElementById("add-expense").addEventListener("click", addExpense);

// Initial update of totals
updateTotals();