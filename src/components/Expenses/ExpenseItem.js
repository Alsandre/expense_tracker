import {useState} from 'react';

import ExpenseDate from "./ExpenseDate";
import classes from "./ExpenseItem.module.css";
import Card from "../UI/Card";


const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.title);
  return (
    <Card className={classes["expense-item"]}>
      <ExpenseDate date={props.date} />
      <div className={classes["expense-item__description"]}>
        <h2>{title}</h2>
        <div className={classes["expense-item__price"]}>${props.amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
