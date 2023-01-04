/**
 * Title: Workout List
 * Description: Workout List
 * Author: M.h Sajjad Hossain Ripon
 * Data: Sun,2022-12-25
 * Time: 02:24:09.000-05:00
 */
import React, { useEffect } from "react";
import config from "../../../config";
import useAuthContext from "../../../hooks/useAuthContext";
import useWorkoutContext from "../../../hooks/useWorkoutContext";
import SingleWorkout from "./SingleWorkout";

const WorkoutList = () => {
  const { workouts, dispatch } = useWorkoutContext();
  const { user } = useAuthContext();

  //   Get All workouts and set it to the local state
  const getWorkouts = async () => {
    const res = await fetch(`${config.baseUrl}/api/workouts`, {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    const data = await res.json();

    if (res.ok) {
      dispatch({
        type: "SET_WORKOUTS",
        payload: data,
      });
      console.log("data :", data);
    }
  };

  useEffect(() => {
    if (user) {
      getWorkouts();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const workoutListView = workouts?.map((workout) => (
    <div className="col-12" key={workout?._id}>
      <SingleWorkout workout={workout} />
    </div>
  ));

  return (
    <>
      <div className="row pt-[15px]">{workoutListView}</div>
    </>
  );
};

export default WorkoutList;
