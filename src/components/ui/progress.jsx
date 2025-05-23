import React from "react";

export const Progress = ({ value = 0 }) => {
  return (
    <div className="w-full bg-gray-200 rounded-full h-3">
      <div
        className="bg-blue-600 h-3 rounded-full transition-all duration-300 ease-in-out"
        style={{ width: `${value}%` }}
      ></div>
    </div>
  );
};
