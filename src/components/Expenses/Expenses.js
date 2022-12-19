import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import {useState} from "react";

function Expenses(props) {

    const [filterYear, setFilter] = useState('2022')
    const changeYearHandler = (year) => {
        setFilter(year)
        console.log(filterYear)
    }

    return (
        <Card className={'expenses'}>
            <ExpensesFilter selected={filterYear} onChangeYear={changeYearHandler}/>
            {props.items.map((element) => (
                <ExpenseItem
                title={element.title}
                amount={element.amount}
                date={element.date}
           /> ))}
        </Card>
    );
}

export default Expenses;