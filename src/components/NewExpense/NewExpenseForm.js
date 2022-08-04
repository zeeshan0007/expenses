import React, { useState } from 'react'
import './NewExpenseForm.css'
const NewExpenseForm = (props) => {
console.log(props)
    const[title,setTitle]=useState();
    const[amount,setAmount]=useState();
    const[date,setDate]=useState();

//    const[userInput,setUserInput]= useState({
//         title:'',
//         amount:'',
//         date:'',
//     })

    const titleChange=(e)=>{
        setTitle(e.target.value)
        // setUserInput({
        //     ...userInput,            //if we don't do this the other state attributes will bw lost 
        //     title : e.target.value,
        // })
        //best or safer way to update state
        // setUserInput((prevState)=>{
        //     return {...prevState , title: e.target.value}
        // })

    }
    
    const amountChange=(e)=>{
        setAmount(e.target.value)
        // setUserInput({
        //     ...userInput,            //if we don't do this the other state attributes will bw lost 
        //     amount : e.target.value, //copy all the previous state and just overwrite the specific value
        // })

    }
    
    const dateChange=(e)=>{
        setDate(e.target.value)
        // setUserInput({
        //     ...userInput,            //if we don't do this the other state attributes will bw lost 
        //     date : e.target.value,
        // })
    }
    const handleSubmit=(e)=>{
        e.preventDefault();

        const expenseData={
            title:title,
            amount:+amount,
            date:new Date(date),
        };
        props.onSaveExpenseData(expenseData)
        setTitle('');
        setAmount('');
        setDate('');
    }
  return (
    <form onSubmit={handleSubmit}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                  <label>Title</label>
                  <input type='text' value={title} onChange={titleChange}/>
            </div>
            <div className='new-expense__control'>
                  <label>Amount</label>
                  <input type='number' value={amount} onChange={amountChange}/>
            </div>
            <div className='new-expense__control'>
                  <label>Date</label>
                  <input type='date' value={date} onChange={dateChange}/>
            </div>
        
        </div>
        <div className='new-expense__control'>
            <button type='submit'>Add Expense</button>
            </div>
        
    </form>
  )
}
export default NewExpenseForm;