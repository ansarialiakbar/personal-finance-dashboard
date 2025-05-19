import React from "react";
import { BellAlertIcon, LightBulbIcon } from "@heroicons/react/24/outline";

const alerts = [
  {
    id: 1,
    type: "alert",
    message: "⚠️ Overspending on Food — You've exceeded your monthly food budget by $75.",
    color: "bg-red-100 text-red-700 dark:bg-red-800 dark:text-red-200",
  },
  {
    id: 2,
    type: "alert",
    message: "⚠️ Salary not received — Your expected income for May hasn't been logged yet.",
    color: "bg-yellow-100 text-yellow-700 dark:bg-yellow-800 dark:text-yellow-200",
  },
];

const tips = [
  {
    id: 1,
    type: "tip",
    message: "💡 Tip: Set spending limits per category to avoid budget surprises.",
  },
  {
    id: 2,
    type: "tip",
    message: "💡 Tip: Use your credit card for cashback rewards but always pay on time.",
  },
  {
    id: 3,
    type: "tip",
    message: "💡 Tip: Consider moving unspent funds to savings at month-end.",
  },
];

const Notifications = () => {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md mt-4">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
        Notifications & Tips
      </h2>

      {/* Alerts Section */}
      <div className="space-y-3 mb-6">
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className={`flex items-start gap-2 p-3 rounded-md ${alert.color}`}
          >
            <BellAlertIcon className="w-5 h-5 mt-0.5" />
            <p className="text-sm font-medium">{alert.message}</p>
          </div>
        ))}
      </div>

      {/* Tips Section */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-1">
          Budget Tips
        </h3>
        {tips.map((tip) => (
          <div
            key={tip.id}
            className="flex items-start gap-2 p-3 rounded-md bg-blue-50 dark:bg-blue-900 text-blue-800 dark:text-blue-200"
          >
            <LightBulbIcon className="w-5 h-5 mt-0.5" />
            <p className="text-sm">{tip.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
