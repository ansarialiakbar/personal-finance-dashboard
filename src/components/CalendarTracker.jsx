import React, { useState } from "react";
import { eachDayOfInterval, format, startOfMonth, endOfMonth, isSameDay } from "date-fns";

// Sample daily spending mock data
const mockDailySpending = {
  "2025-05-01": [{ description: "Coffee", amount: 5 }],
  "2025-05-03": [{ description: "Groceries", amount: 45 }],
  "2025-05-07": [
    { description: "Netflix", amount: 12 },
    { description: "Snacks", amount: 8 }
  ],
  "2025-05-15": [{ description: "Dinner", amount: 30 }],
  "2025-05-19": [{ description: "Gas", amount: 40 }],
  "2025-05-22": [{ description: "Movie", amount: 18 }],
  "2025-05-25": [{ description: "Books", amount: 25 }],
};

const CalendarTracker = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const today = new Date();
  const monthStart = startOfMonth(today);
  const monthEnd = endOfMonth(today);
  const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd });

  const handleDayClick = (date) => {
    const dateStr = format(date, "yyyy-MM-dd");
    if (mockDailySpending[dateStr]) {
      setSelectedDate({ date, transactions: mockDailySpending[dateStr] });
    } else {
      setSelectedDate(null);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md mt-4">
      <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-100 mb-4">
        Calendar Tracker
      </h2>

      <div className="grid grid-cols-7 gap-2 text-center text-sm">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
          <div key={d} className="font-medium text-gray-600 dark:text-gray-300">
            {d}
          </div>
        ))}

        {daysInMonth.map((day) => {
          const dateStr = format(day, "yyyy-MM-dd");
          const isSpending = mockDailySpending[dateStr];
          const isToday = isSameDay(day, today);

          return (
            <button
              key={dateStr}
              onClick={() => handleDayClick(day)}
              className={`h-14 rounded-lg border text-sm transition duration-150 flex items-center justify-center flex-col
                ${
                  isSpending
                    ? "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300"
                    : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                }
                ${isToday ? "ring-2 ring-green-500" : ""}
              `}
            >
              {format(day, "d")}
              {isSpending && (
                <span className="text-xs mt-1 font-medium">
                  ${mockDailySpending[dateStr].reduce((acc, tx) => acc + tx.amount, 0)}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {selectedDate && (
        <div className="mt-6 bg-gray-50 dark:bg-gray-700 p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
            Transactions on {format(selectedDate.date, "MMMM d, yyyy")}
          </h3>
          <ul className="space-y-1 text-gray-700 dark:text-gray-300">
            {selectedDate.transactions.map((tx, index) => (
              <li key={index} className="flex justify-between border-b pb-1">
                <span>{tx.description}</span>
                <span className="font-semibold">${tx.amount}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CalendarTracker;
