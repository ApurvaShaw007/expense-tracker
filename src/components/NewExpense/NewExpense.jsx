import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm.jsx";

function NewExpense(props) {
  const [isEditing, setIsEditing] = useState(false);

  function saveExpenseDataHandler(enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  }
  function startEditing() {
    setIsEditing(true);
  }
  function stopEditing() {
    setIsEditing(false);
  }

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditing}>Add New Expense</button>}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onChange={stopEditing}
        />
      )}
    </div>
  );
}

export default NewExpense;
