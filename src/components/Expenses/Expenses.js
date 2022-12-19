import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import {useState} from "react";

function Expenses(props) {

    const [filterYear, setFilter] = useState('2022')
    const changeYearHandler = (year) => {setFilter(year) }

    const filterExpenses = props.items.filter((element) =>
        element.date.getFullYear() === parseInt(filterYear)
    );

    let expensesContent = <p>No expenses found!</p>;

    if (filterExpenses.length > 0) {
        expensesContent = filterExpenses
            .map((element) => (
                <ExpenseItem
                    key={Math.random().toString()}
                    title={element.title}
                    amount={element.amount}
                    date={element.date}
                />))
    }

    return (
        <Card className={'expenses'}>
            <ExpensesFilter selected={filterYear} onChangeYear={changeYearHandler}/>
            {expensesContent}
        </Card>
    );
}

export default Expenses;