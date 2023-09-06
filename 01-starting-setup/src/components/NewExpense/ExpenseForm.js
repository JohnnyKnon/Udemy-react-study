import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: '',
  //     enteredAmount: '',
  //     enteredDate: '',
  //   });

  /**
   *
   *  모든 이밴트에 대응하는 핸들러가 존재
   * ==================================================================================================================
   */
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);

    /**
     *  객체를 사용하여 처리하는 방식은 하단의 2가지 입니다. 2가지 모두 가능은 하지만, 리액트는 상태 업데이트를 예약해두기 때문에 즉시 처리하지 않음
     *  그렇기 때문에, 전자의 방식으로 이전 상태 의존한 작업을 할 경우 간혹 오래되었거나, 잘못된 상태 스냅샷에 의존할 경우가 이론적으로 존재함
     *  하지만, 후자의 경우에는, 내부 함수에서 제공하는 여기서는 prevState 상태 스냅샷 매개변수를 통하여, 최신 상태 스냅샷이 되도록 보장해줌
     *  따라서, 후자의 경우에는 전자의 경우보다 안전하게 최신 상태 스냅샷으로 작업할 수 있는 방법
     *  이전 상태에 의존해 상태를 업데이트 할 경우에는 후자를 선택하자!
     */

    // setUserInput({ ...userInput, enteredTitle: event.target.value });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    // setUserInput({ ...userInput, enteredAmount: event.target.value });
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    // setUserInput({ ...userInput, enteredDate: event.target.value });
    setEnteredDate(event.target.value);
  };

  // ==================================================================================================================

  /**
   *
   *  다른 방식으로 핸들링 하는 방법 ( 모든 input 변화 감지 시킬 수 있게 )
   * ==================================================================================================================
   */

  //   const inputChangeHandler = (identifier, value) => {
  //     if (identifier === 'title') {
  //       setEnteredTitle(value);
  //     } else if (identifier === 'date') {
  //       setEnteredDate(value);
  //     } else {
  //       setEnteredAmount(value);
  //     }
  //   };

  // 위 와 같은 방식을 대응하는 방법
  // onChange={(event) => inputChangeHandler('title', event.target.value)}

  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);

    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };



  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit" >Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
