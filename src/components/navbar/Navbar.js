import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <div className="flex justify-between p-8 md:p-3 items-center bg-gray-500">
      <div>
        <Link to="/" className="text-white font-bold text-2xl">
          MobileCart
        </Link>
      </div>
      <div className="flex space-x-6">
        {!localStorage.getItem("token") ? (
          <div className="flex space-x-2">
            <Link
              to="login"
              className="bg-green-400 font-semibold text-xl  px-3 py-2 rounded-lg md:px-4 md:py-3 md:text-white"
            >
              Login
            </Link>
            <Link
              to="signup"
              className="bg-green-400 font-semibold text-xl px-3 py-2 rounded-lg md:px-4 md:py-3 md:text-white"
            >
              Signup
            </Link>
          </div>
        ) : (
          <button
            onClick={handleLogout}
            className="bg-green-400 px-2 py-1 rounded-lg md:px-4 md:py-3 md:text-white"
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
