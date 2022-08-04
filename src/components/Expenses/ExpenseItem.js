import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import './ExpenseItem.css'
const ExpenseItem = (props) => {
  const[title,setTitle]=useState(props.title);

  const handleChangeTitle=()=>{
    setTitle('changes')
  }
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item__price">{props.amount}</div>
      <button onClick={handleChangeTitle}>change title</button>
    </div>
  );
};
export default ExpenseItem;
