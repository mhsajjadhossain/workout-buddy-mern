import React, { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../../hooks/useLogin";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading, error } = useLogin();

  /**
   * @method handleFormSubmit()
   * @arg e
   */
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
  };
  return (
    <>
      <div className="w-full mt-[30px] bg-white px-5 py-10 shadow-sm">
        <h3 className="text-2xl text-gray-800 font-semibold text-center mb-[10px]">
          Log In
        </h3>
        <form onSubmit={handleFormSubmit}>
          <div className="mb-[15px]">
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              placeholder="test@example.com"
              id="email"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="w-full block bg-transparent border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div className="">
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              placeholder="John Doe"
              id="password"
              required
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="w-full block bg-transparent border border-gray-300 rounded px-3 py-2"
            />
          </div>

          <p className="text-gray-600 text-sm">
            Don't have any account then{" "}
            <Link
              to="/signup"
              className="text-blue-500 pb-5 pt-2 inline-block hover:underline"
            >
              sign up
            </Link>{" "}
            now.
          </p>

          <button
            disabled={isLoading}
            className="w-full py-2 bg-cyan-400 text-white font-semibold text-xl cursor-pointer rounded"
          >
            Log In
          </button>

          {/* error message */}
          {error && (
            <p className="text-red-700 p-2 rounded mt-2 text-sm bg-red-100">
              {error}
            </p>
          )}
          {/* error message */}
        </form>
      </div>
    </>
  );
};

export default LoginForm;
