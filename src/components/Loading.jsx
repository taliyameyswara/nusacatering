import React from "react";

const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-12 h-12 border-4 border-light rounded-full animate-spin"></div>
      </div>
    </div>
  );
};

export default Loading;
