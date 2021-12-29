import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = props => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [formVisible, setFormVisible] = useState(false);

  const titleChangeHandler = event => {
    setTitle(event.target.value);
  };

  const amountChangeHandler = event => {
    setAmount(event.target.value);
  };

  const dateChangeHandler = event => {
    setDate(event.target.value);
  };

  const submitHandler = event => {
    event.preventDefault();
    console.log(date);

    const data = {
      title: title,
      amount: +amount,
      date: new Date(date + 'T12:00:00Z'),
    };

    console.log(data);

    props.onSaveExpenseData(data);

    setTitle('');
    setAmount('');
    setDate('');
  };

  return formVisible ? (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={title} onChange={titleChangeHandler} />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" value={amount} min="0.01" step="0.01" onChange={amountChangeHandler} />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" value={date} min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={() => setFormVisible(false)}>
          cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  ) : (
    <div>
      <button type="button" onClick={() => setFormVisible(true)}>
        Add new Expense
      </button>
    </div>
  );
};

export default ExpenseForm;
