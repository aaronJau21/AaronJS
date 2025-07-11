import React from "react";

export const CardComponent = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-2xl transition-all">
      {children}
    </div>
  );
};
