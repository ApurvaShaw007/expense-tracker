import "./Expenses.css";
import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
function Expenses(props) {
  const [filteredYear, setfilteredYear] = useState("2022");

  const filteredExpense = props.items.filter((f) => {
    return f.date.getFullYear().toString() === filteredYear;
  });

  function filterYear(selectedYear) {
    setfilteredYear(selectedYear);
  }
  return (
    <div>
      <div className="expenses">
        <ExpensesFilter selected={filteredYear} onAddFilter={filterYear} />
        <ExpensesChart expenses={filteredExpense} />
        {filteredExpense.map((data1) => (
          <ExpenseItem
            key={data1.id}
            title={data1.title}
            amount={data1.amount}
            date={data1.date}
          />
        ))}
      </div>
    </div>
  );
}

export default Expenses;
