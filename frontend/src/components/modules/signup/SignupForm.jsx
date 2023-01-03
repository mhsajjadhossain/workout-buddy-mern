import React, { useState } from "react";
import { Link } from "react-router-dom";
import useSignup from "../../../hooks/useSignup";

const SignupForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, isLoading, error } = useSignup();

  /**
   * @method handleFormSubmit()
   * @arg e
   */
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    await signup(username, email, password);
  };
  return (
    <>
      <div className="w-full mt-[30px] bg-white px-5 py-10 shadow-sm">
        <h3 className="text-2xl text-gray-800 font-semibold text-center mb-[10px]">
          Sign Up
        </h3>
        <form onSubmit={handleFormSubmit}>
          <div className="mb-[15px]">
            <label htmlFor="username">Username: </label>
            <input
              type="text"
              placeholder="John Doe"
              id="username"
              required
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              className="w-full block bg-transparent border border-gray-300 rounded px-3 py-2"
            />
          </div>
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
          <div>
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
            Already have an account then{" "}
            <Link
              to="/login"
              className="text-blue-500 pb-5 pt-2 inline-block hover:underline"
            >
              login
            </Link>{" "}
            here.
          </p>
          <button
            disabled={isLoading}
            className="w-full py-2 bg-cyan-400 text-white font-semibold text-xl cursor-pointer rounded"
          >
            Sign Up!
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

export default SignupForm;
