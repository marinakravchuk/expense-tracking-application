import "./CostForm.css"
import React,{useState} from 'react';
const CostForm = (props) => {
    const [inputName, setInputName] =useState('');
    const[inputAmout, setInputAmount] = useState('');
    const[inputDate, setInputDate] = useState('');
/* const [userInport, setUserInput] = useState ({
    name:"",
    amout:"",
    date:"" 
})*/

const nameChangeHandler = (event)=>{
    setInputName(event.target.value) 
/* setUserInput({
    ...setUserInput,
    name: event.target.event 
}) */
/* setUserInput((previousState)=>{
    return{
        ...previousState,
        name: event.target.event 
        }
    }) */
};

const amountChangeHandler = (event)=> {
    setInputAmount(event.target.value)
/*  setUserInput({
    ...setUserInput,
    amout: event.target.event 
}) */
};

const dateChangeHandler = (event)=> {
    setInputDate(event.target.value)
/*    setUserInput({
    ...setUserInput,
    date: event.target.event 
}) */
} 

const submitHandler = (event)=>{
event.preventDefault();

const costData = {
    description: inputName,
    amount:inputAmout,
    date: new Date(inputDate)

}

props.onSaveCostData(costData)
setInputName('');
setInputAmount('');
setInputDate('');



}

    return (
        <form onSubmit={submitHandler}>
            <div className= "new-cost__controls">
            <div className="new-cost__control">
                <label>Name</label>
                <input type="text" value={inputName}  onChange={nameChangeHandler}/>
            </div>
            <div className="new-cost__control">
                <label>Amount</label>
                <input type="number" min="0.1" step="0.01"value={inputAmout}  onChange={amountChangeHandler}/>
            </div> 
            <div className="new-cost__control">
                <label>Date</label>
                <input type="date" min="2019-01-01" step="2023-12-31" value={inputDate} onChange={dateChangeHandler}/>
            </div>  
            <div className="new-cost__actions">
            <button type="submit">Add Expenditure</button> 
            <button type="button" onClick={props.onCansel}>Cancel</button>
                </div>          
            </div>
            </form>
    )}

    export default CostForm;