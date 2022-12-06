import react,{ useRef } from 'react';
import './ExpenseForm.css';
const ExpenseForm = () => {
 
     const TitleInputRef = useRef() 
     const AmountInputRef = useRef()
     const DateInputRef = useRef()
    const submitHandler = (event) => {
        event.preventDefault();
        console.log(TitleInputRef.current.value)
      const TitleValue = TitleInputRef.current.value
      const AmountValue = AmountInputRef.current.value 
      const DateValue = DateInputRef.current.value

      const myObj = {
        title: TitleValue,
        amount: AmountValue,
        date: DateValue
      }
      TitleInputRef.current.value = '';
      AmountInputRef.current.value = '';
      DateInputRef.current.value = '';

      console.log(myObj)
    };

 return (
    <form onSubmit={submitHandler}>
    <div className="new-expense__controls">
        <div className="new-expense__control">
            <label>Title</label>
            <input type='text' ref={TitleInputRef}/>
        </div>
        <div className="new-expense__control">
            <label>Amount</label>
            <input type='number' min="0.01" step="0.01" ref={AmountInputRef}  />
        </div>
        <div className="new-expense__control">
            <label>Date</label>
            <input type='date' min="2021-01-01" max="2022-12-31" ref={DateInputRef}/>
        </div>
    </div>
    <div className="new-expense__actions">
    <button>Add Expense</button>  
    </div>
  
 </form>
 )

}

export default ExpenseForm;