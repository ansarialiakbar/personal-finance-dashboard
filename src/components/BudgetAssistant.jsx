import React from "react";

const budgetData = [
  { category: "Food", spent: 350, budget: 400 },
  { category: "Transport", spent: 120, budget: 200 },
  { category: "Entertainment", spent: 90, budget: 150 },
  { category: "Utilities", spent: 180, budget: 180 },
  { category: "Shopping", spent: 250, budget: 300 },
];

const BudgetAssistant = () => {
  return (
    <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md mt-6">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
        Monthly Budget Overview
      </h2>

      <div className="space-y-4">
        {budgetData.map(({ category, spent, budget }) => {
          const percentUsed = Math.min((spent / budget) * 100, 100);
          const isOver = spent > budget;

          return (
            <div key={category}>
              <div className="flex justify-between text-sm text-gray-700 dark:text-gray-300 mb-1">
                <span>{category}</span>
                <span>
                  ${spent} / ${budget}
                </span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                <div
                  className={`h-3 rounded-full ${
                    isOver ? "bg-red-500" : "bg-green-500"
                  }`}
                  style={{ width: `${percentUsed}%` }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BudgetAssistant;
