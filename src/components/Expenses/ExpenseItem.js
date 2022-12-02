import ExpenseDetails from './ExpenseDetails';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';


const ExpenseItem = (props) => {
 
 const clickHandler = () => {
  console.log('clicked!!!!')
 }

 const DeleteHandler = () => {
  console.log(props.title)
 }


  return (
                                                
    <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <ExpenseDetails 
          title = {props.title}
          location = {props.location}
          amount = {props.amount}/>
         <button onClick={clickHandler}>Change title</button>
         <button onClick={DeleteHandler}>Delete</button>
           </Card> 
    
  );
}

export default ExpenseItem;