import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw Error(
      "`useAuthContext` must be use inside of the WorkoutContextProvider"
    );
  }
  return context;
};

export default useAuthContext;
