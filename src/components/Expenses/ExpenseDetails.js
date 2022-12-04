import { useState } from "react"



const ExpenseDetails = (props) => {
     
         const [title,setTitle]=useState(props.title)

         console.log('react is updated')

     const ClickHandler = () => {
         setTitle('updated')
         console.log(title)
     }

     const DeleteHandler = () => {
          console.log(props.title)
     }

return(
     <div id="exp" className="expense-item__description">
     
    <h2>{title}</h2>
    <h3>{props.location}</h3>
    
    
     <div id="amount" className="expense-item__price">${props.amount}</div>
     <button onClick={ClickHandler}>Change title</button>
     <button onClick={DeleteHandler}>Delete</button>
     </div>
    
)
}

export default ExpenseDetails;