import React from "react";

const BudgetItem = ({ budget, budgetToggle }) => {
  const { name, Amount } = budget;
  function handleBudget() {
    budgetToggle(budget.id);
  }
  return (
    <>
      <label className="listItems">
        <li>
          <input
            type="checkbox"
            checked={budget.complete}
            onChange={handleBudget}
          ></input>
          <div className="spanItems">
            <span>{name}</span>
            <span>{Amount}</span>
          </div>
        </li>
      </label>
    </>
  );
};
export default BudgetItem;
