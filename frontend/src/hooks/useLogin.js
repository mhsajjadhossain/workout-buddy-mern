import { useState } from "react";
import config from "../config";
import useAuthContext from "./useAuthContext";

const useLogin = () => {
  const { dispatch } = useAuthContext();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  /**
   * @method login()
   * @arg email
   * @arg password
   */
  const login = async (email, password) => {
    setError(null);
    setIsLoading(true);

    const res = await fetch(`${config.baseUrl}/api/user/login `, {
      method: "POST",
      body: JSON.stringify({ email, password }),
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

  return { isLoading, error, login };
};

export default useLogin;
