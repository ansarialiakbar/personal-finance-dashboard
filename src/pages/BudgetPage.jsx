import React from "react";
import BudgetAssistant from "../components/BudgetAssistant";

const BudgetPage = () => {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
        Monthly Budget Overview
      </h1>
      <BudgetAssistant />
    </div>
  );
};

export default BudgetPage;
