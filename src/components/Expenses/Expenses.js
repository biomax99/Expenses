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
            <ExpenseItem date={props.items[0].date}
                         title={props.items[0].title}
                         amount={props.items[0].amount}
            ></ExpenseItem>
            <ExpenseItem date={props.items[1].date}
                         title={props.items[1].title}
                         amount={props.items[1].amount}
            ></ExpenseItem>
            <ExpenseItem date={props.items[2].date}
                         title={props.items[2].title}
                         amount={props.items[2].amount}
            ></ExpenseItem>
            <ExpenseItem date={props.items[3].date}
                         title={props.items[3].title}
                         amount={props.items[3].amount}
            ></ExpenseItem>
        </Card>
    );
}

export default Expenses;