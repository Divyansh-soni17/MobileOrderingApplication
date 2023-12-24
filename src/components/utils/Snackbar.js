// Snackbar.js

import React, { useState, useEffect } from "react";

const Snackbar = ({ message, type = "success", onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsVisible(false);
      onClose();
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, [onClose]);

  return (
    <div
      className={`${
        isVisible ? "translate-y-0" : "translate-y-full"
      } fixed bottom-0 left-0 w-full p-4 transition-transform duration-300 ease-in-out transform bg-${
        type === "success" ? "green" : "red"
      }-500 text-white`}
    >
      {message}
    </div>
  );
};

export default Snackbar;
