import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id:Math.random().toString()
    };
    props.ExpenseDataIntoApp(expenseData)
    SetIsEditing(false)
  }

const[IsEditing,SetIsEditing] = useState(false)

 const startEditingHandler = () => {
  SetIsEditing(true)
 }
 const stopEditingHandler = () => {
  SetIsEditing(false)
 }
  return (
    <div className="new-expense">
      {IsEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} Onchange={stopEditingHandler}/>}
      {!IsEditing && <button onClick={startEditingHandler}>Add Expense</button>}
    </div>
  );
};

export default NewExpense;
