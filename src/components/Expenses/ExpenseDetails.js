



const ExpenseDetails = (props) => {
     
     const DeleteHandler = () => {
          console.log(props.title)
     }

return(
     <div className="expense-item__description">
     
    <h2>{props.title}</h2>
    <h3>{props.location}</h3>
    
    
     <div className="expense-item__price">${props.amount}</div>
     <button onClick={DeleteHandler}>Delete</button>
     </div>
    
)
}

export default ExpenseDetails;