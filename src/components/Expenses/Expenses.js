import './Expenses.css'
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import {useState} from "react";
import ExpensesList from "./ExpensesList";

function Expenses(props) {

    const [filterYear, setFilter] = useState('2022')
    const changeYearHandler = (year) => {setFilter(year) }

    const filterExpenses = props.items.filter((element) =>
        element.date.getFullYear() === parseInt(filterYear)
    );

    return (
        <Card className={'expenses'}>
            <ExpensesFilter selected={filterYear} onChangeYear={changeYearHandler}/>
            <ExpensesList title={filterExpenses} />
        </Card>
    );
}

export default Expenses;