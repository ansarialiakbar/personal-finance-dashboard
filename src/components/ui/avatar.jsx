// src/components/ui/avatar.jsx
import React from "react";

// Wrapper component
export const Avatar = ({ children, className = "" }) => {
  return (
    <div className={`w-10 h-10 rounded-full overflow-hidden ${className}`}>
      {children}
    </div>
  );
};

// Image inside Avatar
export const AvatarImage = ({ src, alt = "Avatar", className = "", ...props }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`w-full h-full object-cover ${className}`}
      {...props}
    />
  );
};

// Fallback in case image fails
export const AvatarFallback = ({ name = "?" }) => {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gray-300 text-gray-600">
      {name[0]?.toUpperCase() || "?"}
    </div>
  );
};
