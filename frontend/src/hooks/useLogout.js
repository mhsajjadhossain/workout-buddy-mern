import useAuthContext from "./useAuthContext";
import useWorkoutContext from "./useWorkoutContext";

const useLogout = () => {
  const { dispatch } = useAuthContext();
  const { dispatch: workoutDispatch } = useWorkoutContext();

  /**
   * @method logout()
   */
  const logout = () => {
    // remove user from storage
    localStorage.removeItem("user");
    //dispatch logout action
    dispatch({ type: "LOGOUT" });
    workoutDispatch({ type: "SET_WORKOUTS", payload: null });
  };

  return { logout };
};

export default useLogout;
