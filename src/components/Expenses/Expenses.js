import React, { useState } from 'react';

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter/ExpensesFilter';
import ExpensesList from './ExpensesList/ExpensesList';

import './Expenses.css';

const Expenses = props => {
  const [filteredYear, setFilteredYear] = useState('2021');

  const selectDateHandler = enteredDate => {
    setFilteredYear(enteredDate);
  };

  const filteredExpenses = props.items.filter(
    expense => new Date(expense.date).getFullYear() === parseInt(filteredYear)
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selectedYear={filteredYear} onChangeFilter={selectDateHandler} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
