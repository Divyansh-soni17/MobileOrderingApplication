// Signup.js

import React, { useState } from "react";
import { userSignup } from "../../apis/userAPIs";
import { useNavigate } from "react-router-dom";
import ButtonLoader from "../utils/ButtonLoader";

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async () => {
    try {
      setLoading(true);
      const signupdata = await userSignup(name, email, password);
      if (signupdata?.success) {
        const token = signupdata.authtoken;
        localStorage.setItem("token", token);
        navigate("/");
      }
    } catch (error) {
      alert("Invalid credentials");
      console.error("Error signing up:", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-3xl font-semibold mb-4 text-center text-blue-500">
        Sign Up
      </h2>
      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label className="block text-sm font-medium text-gray-600">
            Name
          </label>
          <input
            type="text"
            className="mt-1 p-3 w-full border border-gray-300 rounded-md"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600">
            Email
          </label>
          <input
            type="email"
            className="mt-1 p-3 w-full border border-gray-300 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600">
            Password
          </label>
          <input
            type="password"
            className="mt-1 p-3 w-full border border-gray-300 rounded-md"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="button"
          className="bg-blue-500 text-white px-4 py-3 rounded-md relative hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          onClick={handleSignup}
        >
          {loading && <ButtonLoader />}
          <span>Sign Up</span>
        </button>
      </form>
    </div>
  );
};

export default Signup;
