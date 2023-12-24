import React, { useState } from "react";
import { userLogin } from "../../apis/userAPIs";
import { useNavigate } from "react-router-dom";
import ButtonLoader from "../utils/ButtonLoader";
import Snackbar from "../utils/Snackbar";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    try {
      setLoading(true);
      const logindata = await userLogin(email, password);
      if (logindata?.success) {
        const token = logindata.authtoken;
        localStorage.setItem("token", token);
        setLoading(false);
        navigate("/");
      }
    } catch (error) {
      alert("Login using correct credentials");
      console.error("Error logging in:", error.message);
      setLoading(false);
    }
  };

  return (
    <>
      <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
        <h2 className="text-3xl font-semibold mb-4 text-center text-blue-500">
          Login
        </h2>
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
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
            onClick={handleLogin}
          >
            {loading && <ButtonLoader />}
            <span>Login</span>
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
