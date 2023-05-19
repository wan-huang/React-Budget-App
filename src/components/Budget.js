import React, {useContext} from 'react';
import {AppContext} from '../context/AppContext';

const Budget = () => {

    //set upper limit of budget 
    const BUDGET_MAX_VALUE = 20000

    //get global state from redux state
    const { budget, expenses ,currency, dispatch } = useContext(AppContext);

    //get total expenses
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    //handle increase or decrease budget
    const onChangeBudgetHandler = (event) => {

        //convert input into number type
        const numValue = Number(event.target.value);

        // check if the entered value is a number
        if (Number.isNaN(numValue)) {
        alert('Please enter a valid number.');
        return;
        }

        // check if the entered value is an integer number
        if (!Number.isInteger(numValue)) {
        alert('Please enter an integer number.');
        return;
        }

        // check if the budget value < total expenses
        if (numValue < totalExpenses) {
        alert(
            "The value of the buget can't be lower than the expenses value " +
            currency +
            totalExpenses
        );


        } else {
            if (numValue > BUDGET_MAX_VALUE) {
                alert('Please enter a value less that ' + BUDGET_MAX_VALUE);
                return;
            }
            //action dispatch function, sent type and payload to reducer
            dispatch({
                type: 'SET_BUDGET',
                payload: numValue,
            });
        }
    };

    return (
        <div className='alert alert-secondary'>
            Budget:{currency}{
            <span>
                <input
                    required="required"
                    type="number"
                    id="budget"
                    value={budget}
                    step="10"
                    width="10"
                    onChange={onChangeBudgetHandler}
            ></input>
            </span>
        }
        </div>
    )
}

export default Budget;