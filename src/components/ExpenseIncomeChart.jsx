import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", income: 4000, expense: 2400 },
  { month: "Feb", income: 4200, expense: 2600 },
  { month: "Mar", income: 4100, expense: 2700 },
  { month: "Apr", income: 3900, expense: 2500 },
  { month: "May", income: 4400, expense: 2900 },
  { month: "Jun", income: 4600, expense: 3000 },
  { month: "Jul", income: 4800, expense: 3200 },
  { month: "Aug", income: 4700, expense: 3100 },
  { month: "Sep", income: 5000, expense: 3400 },
  { month: "Oct", income: 5200, expense: 3500 },
  { month: "Nov", income: 5300, expense: 3600 },
  { month: "Dec", income: 5500, expense: 3700 },
];

const ExpenseIncomeChart = () => {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-100 mb-4">
        Income vs Expenses
      </h2>
      <div className="w-full h-72">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="month" stroke="#9ca3af" />
            <YAxis stroke="#9ca3af" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="income" stroke="#4f46e5" strokeWidth={2} />
            <Line type="monotone" dataKey="expense" stroke="#ef4444" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ExpenseIncomeChart;
