import ExpenseItem from "./components/ExpenseItem";

function App(){
    let expenses = [
        {
            id: 'e1',
            title: 'School Fee',
            amount: 250,
            date: new Date(2024, 12, 18) 
        },
        {
            id: 'e2',
            title: 'Books',
            amount: 230,
            date: new Date(2024, 4, 25) 
        },
        {
            id: 'e3',
            title: 'House Rent',
            amount: 250,
            date: new Date(2024, 8, 19) 
        },
        {
            id: 'e4',
            title: 'Food',
            amount: 540,
            date: new Date(2024, 1, 1) 
        },
    ]
    return (
        <div>
            <h2>Let's get started</h2>
            <ExpenseItem 
                date={expenses[0].date} 
                title={expenses[0].title} 
                amount={expenses[0].amount} >
            </ExpenseItem>
            <ExpenseItem 
                date={expenses[1].date} 
                title={expenses[1].title} 
                amount={expenses[1].amount} >
            </ExpenseItem>
            <ExpenseItem 
                date={expenses[2].date} 
                title={expenses[2].title} 
                amount={expenses[2].amount} >
            </ExpenseItem>
            <ExpenseItem 
                date={expenses[3].date} 
                title={expenses[3].title} 
                amount={expenses[3].amount} >
            </ExpenseItem>
        </div>
    );
}

export default App; 