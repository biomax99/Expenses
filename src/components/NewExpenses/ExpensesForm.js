import {useState} from "react";

const ExpensesForm = (props) => {
    const [enterTitle, setEnterTitle] = useState('')
    const [enterAmount, setEnterAmount] = useState('')
    const [enterDate, setEnterDate] = useState('')
    const titleChangeHandler = (event) => {
      setEnterTitle(event.target.value);
    }

    const amountChangeHandler = (event) => {
      setEnterAmount(event.target.value);
    }
    const dateChangeHandler = (event) => {
      setEnterDate(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enterTitle,
            amount: enterAmount,
            date: new Date(enterDate)
        }

        props.onSaveExpenseData(expenseData);
        setEnterTitle('');
        setEnterAmount('');
        setEnterDate('');
    }

    const [click, setClick] = useState('')
    const formVisibility = () => {
        if(click === 'true') {setClick('false')}
        else {
            setClick( 'true')
        }
        return <div></div>;}

    if (click === 'true') {
        return (
            <form onSubmit={submitHandler}>
            <div className={'new-expense__controls'}>
                <div className={'new-expense__control'}>
                    <label>Title</label>
                    <input type={"text"} value={enterTitle} onChange={titleChangeHandler} />
                </div>
                <div className={'new-expense__control'}>
                    <label>Amount</label>
                    <input type={"number"} min={'0.01'} step={'0.01'} value={enterAmount} onChange={amountChangeHandler} />
                </div>
                <div className={'new-expense__control'}>
                    <label>Date</label>
                    <input type={"date"} min={'2019-12-31'} max={'2022-12-31'} value={enterDate} onChange={dateChangeHandler} />
                </div>
                <div className={'new-expense__actions'}>
                    <button onClick={formVisibility} type={"button"}>Close</button>
                    <button type={"submit"}>Add Expenses</button>
                </div>
            </div>
            </form>
        )
    }



  return (
      <form onSubmit={submitHandler}>
        <div className={'new-expense__actions__form'}>
            <button onClick={formVisibility}  type={"button"}>Add Expenses</button>
        </div>

  </form>)
}

export default ExpensesForm;