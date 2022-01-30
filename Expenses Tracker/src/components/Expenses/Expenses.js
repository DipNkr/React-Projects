import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [year, setfilteredYear] = useState("2020");

  const FilterExpenseHandler = (filterdYear) => {
    setfilteredYear(filterdYear);
    
  };

  const filteredExpenses =props.expenses.filter(fData => fData.date.getFullYear().toString()===year)

  

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={year} onFilter={FilterExpenseHandler} />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  );
};

export default Expenses;
