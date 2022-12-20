import './ExpensesList.css'
import ExpenseItem from "./ExpenseItem";
const ExpensesList = (props) => {

    if (props.title.length === 0) {
        return <h2 className={'expenses-list__fallback'}>Found no expenses.</h2>
    }

    return(
        <ul className={'expenses-list'}>
            {props.title.map((element) => (
            <ExpenseItem
                key={Math.random().toString()}
                title={element.title}
                amount={element.amount}
                date={element.date}
            />))}
        </ul>
    )
}

export default ExpensesList;