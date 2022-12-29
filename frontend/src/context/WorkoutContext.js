import { createContext, useReducer } from "react";

export const WorkoutContext = createContext();

export const workoutReducer = (prevState, action) => {
  switch (action.type) {
    case "SET_WORKOUTS":
      return {
        workouts: action.payload,
      };

    case "CREATE_WORKOUT":
      return {
        workouts: [action.payload, ...prevState.workouts],
      };
    case "DELETE_WORKOUT":
      return {
        workouts: prevState.workouts.filter(
          (w) => w._id !== action.payload._id
        ),
      };

    default:
      return prevState;
  }
};

export const WorkoutContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(workoutReducer, {
    workouts: null,
  });
  return (
    <>
      <WorkoutContext.Provider value={{ ...state, dispatch }}>
        {children}
      </WorkoutContext.Provider>
    </>
  );
};
