import React from "react";
import BudgetItem from "./BudgetItem";

export default function BudgetList({ initial, budgetToggle }) {
  return (
    <div>
      <ul>
        {initial.map((budget) => {
          return (
            <BudgetItem
              key={budget.id}
              budget={budget}
              budgetToggle={budgetToggle}
            />
          );
        })}
      </ul>
    </div>
  );
}
