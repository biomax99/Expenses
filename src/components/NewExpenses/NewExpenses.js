import React from "react";
import './NewExpenses.css'
import './ExpensesForm.css'
import ExpensesForm from "./ExpensesForm";


const NewExpenses = (props) => {

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    props.onAddExpense(expenseData)
  }

  return (<div className={'new-expense'}>
    <ExpensesForm onSaveExpenseData={saveExpenseDataHandler} />
  </div>)
}

export default NewExpenses