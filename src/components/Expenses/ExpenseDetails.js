import { useState } from "react"



const ExpenseDetails = (props) => {
     
         const [title,setTitle]=useState(props.title)
         const [amount,setAmount]=useState(props.amount)

         console.log('react is updated')

     const ClickHandler = () => {
         setTitle('updated')
         setAmount(100)
         console.log(title)
     }

     const DeleteHandler = () => {
          console.log(props.title)
     }

return(
     <div className="expense-item__description">
     
    <h2>{title}</h2>
    <h3>{props.location}</h3>
    
    
     <div className="expense-item__price">${amount}</div>
     <button onClick={ClickHandler}>Change title</button>
     <button onClick={DeleteHandler}>Delete</button>
     </div>
    
)
}

export default ExpenseDetails;