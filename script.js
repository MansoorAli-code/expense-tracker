let expenses = JSON.parse(localStorage.getItem('expenses')) || [];

function addExpense() {
  const amount = document.getElementById('amount').value;
  const description = document.getElementById('description').value;
  const category = document.getElementById('category').value;

  if (amount && description) {
    const expense = {
      amount: amount,
      description: description,
      category: category
    };

    expenses.push(expense);
    localStorage.setItem('expenses', JSON.stringify(expenses));
    displayExpenses();
  } else {
    alert('Please fill in amount and description.');
  }
}

function displayExpenses() {
  const expenseList = document.getElementById('expenseList');
  expenseList.innerHTML = '';

  expenses.forEach((expense, index) => {
    const li = document.createElement('li');
    li.className = 'list-group-item';
    li.innerHTML = `${expense.description}: $${expense.amount} (${expense.category}) 
      <button class="btn btn-info btn-sm ml-2" onclick="editExpense(${index})">Edit</button>
      <button class="btn btn-danger btn-sm" onclick="deleteExpense(${index})">Delete</button>`;
    expenseList.appendChild(li);
  });
}

function editExpense(index) {
  const newDescription = prompt('Enter new description:');
  const newAmount = prompt('Enter new amount:');
  const newCategory = prompt('Enter new category:');

  if (newDescription && newAmount && newCategory) {
    expenses[index].description = newDescription;
    expenses[index].amount = newAmount;
    expenses[index].category = newCategory;

    localStorage.setItem('expenses', JSON.stringify(expenses));
    displayExpenses();
  }
}

function deleteExpense(index) {
  expenses.splice(index, 1);
  localStorage.setItem('expenses', JSON.stringify(expenses));
  displayExpenses();
}

displayExpenses();
