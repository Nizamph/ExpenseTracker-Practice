
import ExpenseItem from "./components/ExpenseItem";


function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
      location: 'Supermarket'
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12), location:"raviz Electronics"},
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
      location:"car world"
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
      location:"Timberland"
    },
  ];

  
  return (
    
    <div>
      <h2>let's get started</h2>
      {expenses.map((value)=>{
       return <ExpenseItem title={value.title} amount={value.amount} date={value.date} location={value.location}></ExpenseItem>
      })}

    </div>
  );
}

export default App;
