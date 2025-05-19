import React, { useState } from "react";

// Sample mock transaction data
const mockTransactions = [
  {
    id: 1,
    date: "2025-05-15",
    description: "Grocery Shopping",
    type: "Debit",
    category: "Food",
    amount: 75,
  },
  {
    id: 2,
    date: "2025-05-14",
    description: "Salary",
    type: "Credit",
    category: "Income",
    amount: 2000,
  },
  {
    id: 3,
    date: "2025-05-13",
    description: "Netflix Subscription",
    type: "Debit",
    category: "Entertainment",
    amount: 15,
  },
  {
    id: 4,
    date: "2025-05-12",
    description: "Electricity Bill",
    type: "Debit",
    category: "Utilities",
    amount: 60,
  },
  {
    id: 5,
    date: "2025-05-11",
    description: "Freelance Project",
    type: "Credit",
    category: "Income",
    amount: 500,
  },
  {
    id: 6,
    date: "2025-05-10",
    description: "Gym Membership",
    type: "Debit",
    category: "Health",
    amount: 40,
  },
  {
    id: 7,
    date: "2025-05-09",
    description: "Fuel",
    type: "Debit",
    category: "Transport",
    amount: 50,
  },
  {
    id: 8,
    date: "2025-05-08",
    description: "Dinner Out",
    type: "Debit",
    category: "Food",
    amount: 35,
  },
];

const RecentTransactions = () => {
  const [typeFilter, setTypeFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTransactions = mockTransactions
    .filter((tx) =>
      typeFilter === "All" ? true : tx.type === typeFilter
    )
    .filter((tx) =>
      tx.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tx.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-100">
          Recent Transactions
        </h2>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Search..."
            className="border px-2 py-1 rounded text-sm dark:bg-gray-700 dark:text-white"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            className="border px-2 py-1 rounded text-sm dark:bg-gray-700 dark:text-white"
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Credit">Credit</option>
            <option value="Debit">Debit</option>
          </select>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-left border-b dark:border-gray-600">
              <th className="p-2">Date</th>
              <th className="p-2">Description</th>
              <th className="p-2">Type</th>
              <th className="p-2">Category</th>
              <th className="p-2">Amount</th>
            </tr>
          </thead>
          <tbody>
            {filteredTransactions.length === 0 ? (
              <tr>
                <td colSpan="5" className="p-4 text-center text-gray-500 dark:text-gray-400">
                  No matching transactions found.
                </td>
              </tr>
            ) : (
              filteredTransactions.map((tx) => (
                <tr
                  key={tx.id}
                  className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition"
                >
                  <td className="p-2">{tx.date}</td>
                  <td className="p-2">{tx.description}</td>
                  <td className="p-2">{tx.type}</td>
                  <td className="p-2">{tx.category}</td>
                  <td
                    className={`p-2 font-semibold ${
                      tx.type === "Credit" ? "text-green-600" : "text-red-500"
                    }`}
                  >
                    {tx.type === "Debit" ? "-" : "+"}${tx.amount}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentTransactions;
