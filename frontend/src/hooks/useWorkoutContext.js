import { useContext } from "react";
import { WorkoutContext } from "../context/WorkoutContext";

const useWorkoutContext = () => {
  const context = useContext(WorkoutContext);
  if (!context) {
    throw Error(
      "`useWorkoutContext` must be use inside of the WorkoutContextProvider"
    );
  }
  return context;
};

export default useWorkoutContext;
