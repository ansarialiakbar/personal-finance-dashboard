// src/components/Header.jsx
import React from "react";
import { Progress } from "@/components/ui/progress";
import { Avatar,  AvatarImage } from "@/components/ui/avatar";

const Header = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
      <div className="text-left w-full sm:w-auto">
        <h1 className="text-2xl font-semibold">Welcome back, Akbar! 👋</h1>
        <p className="text-sm text-gray-500">Here is your financial overview</p>
      </div>
      <div className="flex items-center gap-4 mt-4 sm:mt-0">
        <div className="text-sm text-right">
          <p className="text-gray-500 mb-1">Savings Goal (This Month)</p>
          <Progress value={70} className="w-48" />
        </div>
        <Avatar>
          <AvatarImage src="https://i.pravatar.cc/150?img=3" alt="User Avatar" />
        </Avatar>
      </div>
    </div>
  );
};

export default Header;
