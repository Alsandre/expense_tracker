import React, {useState} from 'react';

import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = props => {
    const [formVisibility, setFormVisibility] = useState(false);

    const onAddHandler = data => {
        const enrichedData = {
            ...data,
            id: Math.random().toString()
        }
        props.onAdd(enrichedData);
    }
    const editHandler = () => setFormVisibility(true);

    const onCancel = () => setFormVisibility(false);
    

    return <div className='new-expense'>
        {!formVisibility && <button onClick={editHandler}>Add New Expense</button>}
        {formVisibility && <ExpenseForm onAdd={onAddHandler} onCancel={onCancel}/>}
    </div>
};

export default NewExpense;