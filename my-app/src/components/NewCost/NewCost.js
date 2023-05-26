import React, {useState} from "react";
import CostForm from "./CostForm";
import "./NewCost.css"

const NewCost = (props) => {

const [isFormVisible, setIsFormVisible] = useState(false);
    const SaveCostDataHandler = (inputCostData)=>{

    const costData = {
        ...inputCostData,
        id: Math.random().toString(),
    };

      props.onAddCost(costData);
      setIsFormVisible(false);
    }

    const inputCostDataHandler = () => {
        setIsFormVisible(true);
    } 

const cancelCostHandler = () => {
    setIsFormVisible(false);
}

return( 
<div className="new-cost">
    {!isFormVisible && <button onClick={inputCostDataHandler}>Add New Expense</button>}
    {isFormVisible && <CostForm onSaveCostData = {SaveCostDataHandler} onCansel={cancelCostHandler}></CostForm>}
</div>
);
};

export default NewCost;
