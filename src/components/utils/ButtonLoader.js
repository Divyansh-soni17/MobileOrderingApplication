// ButtonLoader.js

import React from "react";

const ButtonLoader = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-blue-800 border-opacity-50"></div>
    </div>
  );
};

export default ButtonLoader;
