import { useState } from 'react';
import './ExpenseForm.css';
const ExpenseForm = (props) => {
      const [enteredTitle,setEnteredTitle] = useState('')

      const [enteredAmount,setEnteredAmount] = useState('')

      const  [enteredDate,setEnteredDate] = useState('')

    const TitleChangeHandler = (event) => {
        setEnteredTitle(event.props.target.value)
    }
       
    const AmountChangehandler = (e) => {
        setEnteredAmount(e.props.target.value)
    }
      
    const DateChangehandler = (event) => {
        setEnteredDate(event.props.target.value)
    }
 return <form>
    <div classname="new-expense__controls">
        <div className="new-expense__control">
            <label>Title</label>
            <input type='text' onChange={TitleChangeHandler} />
        </div>
        <div className="new-expense__control">
            <label>Amount</label>
            <input type='number' min="0.01" step="0.01" onInput={AmountChangehandler} />
        </div>
        <div className="new-expense__control">
            <label>Date</label>
            <input type='date' min="2021-01-01" max="2022-12-31" onInput={DateChangehandler}/>
        </div>
    </div>
    <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
    </div>
 </form>
}

export default ExpenseForm;