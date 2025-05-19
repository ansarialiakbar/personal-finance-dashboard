import React from "react";
import Header from "../components/Header";
import OverviewCards from "../components/OverviewCards";
import ExpenseIncomeChart from "../components/ExpenseIncomeChart";
import SpendingPieChart from "../components/SpendingPieChart";
import RecentTransactions from "../components/RecentTransactions";
import Notifications from "../components/Notifications";

const Dashboard = () => {
  return (
    <div className="p-4 space-y-6">
      <Header />
      <OverviewCards />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ExpenseIncomeChart />
        <SpendingPieChart />
      </div>
      <RecentTransactions />
      <Notifications />
    </div>
  );
};

export default Dashboard;
