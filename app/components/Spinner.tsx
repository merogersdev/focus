import React from "react";

export default function Spinner() {
  return (
    <div className="flex h-screen w-screen bg-white items-center justify-center">
      <div className="w-20 h-20 border-8 border-l-red-400 border-r-red-400 border-b-gray-100 border-t-gray-100 rounded-full animate-spin"></div>
    </div>
  );
}
