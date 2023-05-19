import React, {useContext} from 'react';
import {AppContext} from '../context/AppContext';
import NumericInput from 'react-numeric-input'

const Budget = () => {
    const {budget} = useContext(AppContext);
    return (
        <div className='alert alert-secondary'>
            Budget: £ 
            <span>
                <NumericInput 
                value={budget}
                step={10}
                min={0}
                max={2000}
                precision = {0} />
            </span>
        </div>
    )
}

export default Budget;