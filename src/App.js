import Expenses from "./components/Expenses/Expenses";
import Card from "./components/UI/Card";
import NewExpenses from "./components/NewExpenses/NewExpenses";
import {useState} from "react";

const INITIAL_EXPENSES = [
    {date: new Date(2022, 11, 7),
    title: "My Title!",
    amount: 546.32},
    {date: new Date(2022, 11, 9),
    title: "Your Title!",
    amount: 631.47},
    {date: new Date(2022, 11, 11),
    title: "Her Title!",
    amount: 318.40},
    {date: new Date(2022, 11, 12),
    title: "Him Title!",
    amount: 578.48}
]



function App() {

    const [expenses, setExpenses] = useState(INITIAL_EXPENSES)

    const addExpenseHandler = expense => {
        console.log('In App.js');
        setExpenses((prevExpenses) => {
            return [expense, ...prevExpenses]
        })
    }

    return (
        <Card>
            <NewExpenses onAddExpense={addExpenseHandler} />
            <Expenses items={expenses}/>
        </Card>
    )
}

export default App;
