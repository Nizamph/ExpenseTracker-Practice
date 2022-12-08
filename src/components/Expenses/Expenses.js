import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';
import "./Expenses.css";
import ExpenseFilter from "./ExpensesFilter";


const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');
    
   const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear)
    }

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

 return(
   
    <Card className="expenses">
    <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
    
    {filteredExpenses.map( (expense) =>(
        <ExpenseItem
        title = {expense.title}
        key = {expense.id}
        location = {expense.location}
        amount = {expense.amount}
        date = {expense.date}
        />
      
      ))}
        
       </Card>
        
 );
}

export default Expenses;