import React from "react";
import "../App.css";

export default function Budgetform({
  handleAmount,
  handleItem,
  handleSubmit,
  BudgetItem,
  Item,
  Amount,
  BudgetAmount,
}) {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="formDiv">
          <div className="form-item">
            <label>ITEM</label>
            <input
              type="text"
              placeholder="Enter item"
              ref={BudgetItem}
              onChange={handleItem}
              value={Item}
              name="Item"
            />
          </div>
          <div className="form-amount">
            <label>AMOUNT</label>
            <input
              ref={BudgetAmount}
              type="number"
              placeholder="Enter Amount"
              onChange={handleAmount}
              value={Amount}
              name="Amount"
            />
          </div>
        </div>
        <button className="submitBtn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
