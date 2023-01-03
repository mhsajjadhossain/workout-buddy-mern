import { useState } from "react";
import config from "../config";
import useAuthContext from "./useAuthContext";

const useSignup = () => {
  const { dispatch } = useAuthContext();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  /**
   * @method signup()
   * @arg email
   * @arg password
   */
  const signup = async (username, email, password) => {
    setError(null);
    setIsLoading(true);

    const res = await fetch(`${config.baseUrl}/api/user/signup`, {
      method: "POST",
      body: JSON.stringify({ username, email, password }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const data = await res.json();

    if (!res.ok) {
      setIsLoading(false);
      setError(data.error);
    }

    if (res.ok) {
      // save the user to the localStorage
      localStorage.setItem("user", JSON.stringify(data));
      // update the auth context
      dispatch({ type: "LOGIN", payload: data });
      setIsLoading(false);
    }
  };

  return { isLoading, error, signup };
};

export default useSignup;
