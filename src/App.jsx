import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import ThemeToggle from "./components/ThemeToggle";
import Dashboard from "./pages/Dashboard";
import CalendarPage from "./pages/CalendarPage";
import BudgetPage from "./pages/BudgetPage";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Router>
      <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
        <Sidebar />
        <main className="flex-1 p-4 overflow-y-auto">
          <ThemeToggle />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/calendar" element={<CalendarPage />} />
            <Route path="/budget" element={<BudgetPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
