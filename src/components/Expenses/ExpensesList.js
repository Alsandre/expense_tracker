import './ExpensesList.css';

import ExpenseItem from './ExpenseItem';

const ExpensesList = props => {
    const renderList = props.list.map((item) => (
        <ExpenseItem
          date={item.date}
          title={item.title}
          amount={item.amount}
          id={item.id}
          key={item.id}
        />
      ))
      let fallBack = <h2 className='expense-list__fallback'>You dont have any expanse for the selected year.</h2>
      if(renderList.length === 0) {
        return fallBack;
      }
    return <ul className='expense-list'>
        {renderList}
    </ul>
};

export default ExpensesList;