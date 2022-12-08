import ExpenseDetails from './ExpenseDetails';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';


const ExpenseItem = (props) => {
 


  return (
       <li>                                         
    <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <ExpenseDetails 
          title = {props.title}
          location = {props.location}
          amount = {props.amount}/>
           </Card> 
            </li>
  );
}

export default ExpenseItem;