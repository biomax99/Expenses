import Expenses from "./components/Expenses/Expenses";
import Card from "./components/UI/Card";

const expense = [
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
    return (
        <Card>
            <h2>Let's get started!</h2>
            <Expenses items={expense}/>
        </Card>
    )
}

export default App;
