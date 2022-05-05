import React, { useState } from "react";
import Expenses from "./Expenses/Expenses";
import NewExpense from "./NewExpense/NewExpense.jsx";

function App() {
  const DUMMY_Expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14)
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2019, 2, 28)
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2019, 5, 12)
    }
  ];

  const [expenses, setExpenses] = useState(DUMMY_Expenses);

  function addExpenseHandler(data) {
    setExpenses((prevData) => {
      return [data, ...prevData];
    });
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}
export default App;
