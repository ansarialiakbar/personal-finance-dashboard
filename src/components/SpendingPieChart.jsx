import React, { useState } from "react";
import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Mock main categories
const mainCategories = [
  { name: "Food", value: 400 },
  { name: "Transport", value: 300 },
  { name: "Entertainment", value: 200 },
  { name: "Utilities", value: 250 },
  { name: "Healthcare", value: 150 },
];

// Mock subcategories
const subCategories = {
  Food: [
    { name: "Groceries", value: 250 },
    { name: "Restaurants", value: 150 },
  ],
  Transport: [
    { name: "Fuel", value: 180 },
    { name: "Public Transit", value: 120 },
  ],
  Entertainment: [
    { name: "Movies", value: 80 },
    { name: "Games", value: 120 },
  ],
  Utilities: [
    { name: "Electricity", value: 100 },
    { name: "Internet", value: 90 },
    { name: "Water", value: 60 },
  ],
  Healthcare: [
    { name: "Medicine", value: 90 },
    { name: "Doctor Visits", value: 60 },
  ],
};

const COLORS = [
  "#4F46E5", "#EC4899", "#10B981", "#F59E0B", "#EF4444",
  "#6366F1", "#06B6D4", "#A855F7", "#F97316", "#22C55E",
];

const SpendingPieChart = () => {
  const [drillCategory, setDrillCategory] = useState(null);

  const data = drillCategory ? subCategories[drillCategory] : mainCategories;

  const handleClick = (entry) => {
    if (!drillCategory) {
      setDrillCategory(entry.name);
    }
  };

  const handleBack = () => {
    setDrillCategory(null);
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-100">
          Category-wise Spending
        </h2>
        {drillCategory && (
          <button
            className="text-sm bg-indigo-600 text-white px-3 py-1 rounded hover:bg-indigo-700"
            onClick={handleBack}
          >
            Back
          </button>
        )}
      </div>

      <div className="w-full h-72">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              innerRadius={40}
              fill="#8884d8"
              onClick={handleClick}
              cursor={!drillCategory ? "pointer" : "default"}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SpendingPieChart;
