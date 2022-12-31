import "./App.css";
import React, { useState, useRef, useEffect } from "react";
import Budgetform from "./Components/Budget-form";
import BudgetList from "./Components/BudgetList";
import Alert from "./Components/Alert";
import { v4 as uuidv9 } from "uuid";

function App() {
  const BudgetAmount = useRef();
  const BudgetItem = useRef();

  const initialBudget = localStorage.getItem("budgetKEY")
    ? JSON.parse(localStorage.getItem("budgetKEY"))
    : [];

  const [budgetEx, setBudgetEx] = useState(initialBudget);
  const [Amount, setAmount] = useState("");
  const [Item, setItem] = useState("");
  const [Alertt, setAlert] = useState({ show: false });

  useEffect(() => {
    localStorage.setItem("budgetKEY", JSON.stringify(budgetEx));
  }, [budgetEx]);

  const renderAlert = ({ type, text }) => {
    setAlert({ show: true, type, text });
    setTimeout(() => {
      setAlert({ show: false });
    }, 4000);
  };
  function budgetToggle(id) {
    const newBudget = [...budgetEx];
    const budget = newBudget.find((budget) => budget.id === id);
    budget.complete = !budget.complete;
    setBudgetEx(newBudget);
  }

  function handleAmount() {
    setAmount(BudgetAmount.current.value);
  }
  function handleItem() {
    setItem(BudgetItem.current.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (!Item == "" && Amount > 0) {
      const eachBudget = { id: uuidv9(), name: Item, Amount, complete: false };
      setBudgetEx([...budgetEx, eachBudget]);
      setItem("");
      setAmount("");
    }
    if (Item === "") {
      renderAlert({ type: "danger", text: "ITEM EMPTY" });
    }
    if (Amount <= 0 || Amount === "") {
      renderAlert({ type: "danger", text: "USE A VALID AMOUNT" });
    }
  }
  function handleDelete() {
    const newbud = budgetEx.filter((bud) => !bud.complete);
    setBudgetEx(newbud);
  }

  return (
    <>
      <div className="budget">
        <h3>Nonye's Budget</h3>
        {Alertt.show && <Alert type={Alertt.type} text={Alertt.text} />}

        <Budgetform
          handleItem={handleItem}
          handleSubmit={handleSubmit}
          handleAmount={handleAmount}
          Amount={Amount}
          Item={Item}
          BudgetItem={BudgetItem}
          BudgetAmount={BudgetAmount}
        />
        <BudgetList initial={budgetEx} budgetToggle={budgetToggle} />
        <div className="foot">
          <button className="deleteBtn" onClick={handleDelete}>
            Delete
          </button>
          <div className="total">
            $
            {budgetEx.reduce((acc, curr) => {
              return (acc += +curr.Amount);
            }, 0)}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
