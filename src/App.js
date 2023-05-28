import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";
import React, { useState } from "react";

const INITIAL_COSTS = [
  {
    id: "c1",
    date: new Date(2021, 2, 12),
    description: "Fridge",
    amount: 44,
  },
  {
    id: "c2",
    date: new Date(2021, 12, 12),
    description: "MacBook",
    amount: 1500,
  },
  {
    id: "c3",
    date: new Date(2021, 8, 17),
    description: "Sofa",
    amount: 500,
  },
];

const App = () => {
  const [costs, setCosts] = useState(INITIAL_COSTS);

  const addCostHandler = (cost) => {
    setCosts((prevCosts) => {
      return [cost, ...prevCosts];
    });
  };

  return (
    <div className="App">
      <NewCost onAddCost={addCostHandler}></NewCost>
      <Costs costs={costs} />
    </div>
  );
};

export default App;
