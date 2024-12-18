import React from "react";

const Loading = ({ bgColor = "bg-gradient", color = "border-light" }) => {
  return (
    <div className={`min-h-screen flex items-center justify-center ${bgColor}`}>
      <div className="flex flex-col items-center space-y-4">
        <div
          className={`w-12 h-12 border-4 border-t-4 ${color} border-t-gray-300 rounded-full animate-spin`}
        ></div>
      </div>
    </div>
  );
};

export default Loading;
