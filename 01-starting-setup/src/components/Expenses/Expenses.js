import React, { useState } from 'react';
import './Expenses.css';
import ExpensesList from './ExpensesList';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import ExpenseChart from './ExpenseChart';

const Expenses = (props) => {

  const expenses = props.data;

  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  }

  // 파생효과를 이용한 작업 onChange를 사용하게 되면 해당 컴포넌트 전체가 브라우저에서 다시그려지기 때문에, 하단 filteredYear이 갱신된 값으로 불러와지고, 결론적으로 원하는 필터 내용 호출
  const filteredExpenses = expenses.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });



  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        <ExpenseChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
