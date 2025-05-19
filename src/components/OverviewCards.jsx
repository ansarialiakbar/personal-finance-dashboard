import React, { useState } from "react";

const mockData = {
  monthly: {
    balance: "$12,500",
    income: "$4,000",
    expenses: "$2,800",
    savingsRatio: "30%",
  },
  quarterly: {
    balance: "$14,200",
    income: "$12,000",
    expenses: "$9,000",
    savingsRatio: "25%",
  },
  yearly: {
    balance: "$18,000",
    income: "$48,000",
    expenses: "$36,000",
    savingsRatio: "40%",
  },
};

const OverviewCards = () => {
  const [view, setView] = useState("monthly");

  const handleViewChange = (newView) => setView(newView);

  const data = mockData[view];

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-100">Financial Overview</h2>
        <div className="space-x-2">
          {["monthly", "quarterly", "yearly"].map((v) => (
            <button
              key={v}
              onClick={() => handleViewChange(v)}
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                view === v
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
              }`}
            >
              {v.charAt(0).toUpperCase() + v.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card title="Total Balance" value={data.balance} />
        <Card title="Monthly Income" value={data.income} />
        <Card title="Monthly Expenses" value={data.expenses} />
        <Card title="Savings Ratio" value={data.savingsRatio} />
      </div>
    </div>
  );
};

const Card = ({ title, value }) => (
  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg shadow hover:shadow-md transition">
    <p className="text-sm text-gray-500 dark:text-gray-300">{title}</p>
    <p className="text-xl font-bold text-gray-800 dark:text-white">{value}</p>
  </div>
);

export default OverviewCards;
