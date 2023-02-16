import { useState } from "react";

import ExpensesList from "./ExpensesList";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";
import Card from "../UI/Card";

import "./Expense.css";

const Expense = (props) => {
  const [selectedYear, setSelectedYear] = useState("2021");
  const filteredList = props.expenses.filter((date) => {
    return date.date.getFullYear() == selectedYear;
  });
  const yearSelectHandler = (data) => {
    setSelectedYear(data);
    // renderList.filter(date => date)
  };

  return (
    <Card className="expenses">
      <ExpenseFilter
        initialYear={selectedYear}
        onYearSelect={yearSelectHandler}
      />
      <ExpensesChart currentData={filteredList}/>
      <ExpensesList list={filteredList} />
      {/* <ExpenseItem
        date={props.expenses[1].date}
        title={props.expenses[1].title}
        amount={props.expenses[1].amount}
        id={props.expenses[1].id}
      />
      <ExpenseItem
        date={props.expenses[2].date}
        title={props.expenses[2].title}
        amount={props.expenses[2].amount}
        id={props.expenses[2].id}
      /> */}
    </Card>
  );
};

export default Expense;
