import React, {useState} from 'react';
import Expenses from './components/Expenses/Expenses';

import NewExpense from './components/NewExpense/NewExpense';

const expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 450,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () =>{
  
  const [newExpenses, setnewExpenses] = useState(expenses)

  const addExpenseHandler = (expense) => {
      setnewExpenses( (preState) =>{
        return [expense, ...preState]
      })
  }

  return (
    <div>
      <NewExpense onAppExpense={addExpenseHandler}/>
      <Expenses expenses={newExpenses}></Expenses>
    </div>
  );
}

export default App;
