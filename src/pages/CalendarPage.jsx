import React from "react";
import CalendarTracker from "../components/CalendarTracker";

const CalendarPage = () => {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
        Spending Calendar
      </h1>
      <CalendarTracker />
    </div>
  );
};

export default CalendarPage;
