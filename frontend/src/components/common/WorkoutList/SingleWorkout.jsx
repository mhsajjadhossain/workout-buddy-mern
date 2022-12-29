/**
 * Title: Single Workout
 * Description: workout details card
 * Author: M.h Sajjad Hossain Ripon
 * Data: Sun,2022-12-25
 * Time: 02:48:29.000-05:00
 */
import { formatDistance } from "date-fns";
import React from "react";
import config from "../../../config";
import useWorkoutContext from "../../../hooks/useWorkoutContext";

const SingleWorkout = ({ workout }) => {
  const { dispatch } = useWorkoutContext();
  /**
   * @method handleDelete()
   * @des handle delete a single workout
   */
  const handleDelete = async () => {
    const res = await fetch(`${config.baseUrl}/api/workouts/${workout?._id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    const data = await res.json();

    if (res.ok) {
      dispatch({
        type: "DELETE_WORKOUT",
        payload: data,
      });
    }
  };
  return (
    <>
      <div className="bg-white my-[15px] px-5 py-4 shadow-sm relative">
        <h3 className="text-xl font-bold capitalize text-cyan-400">
          {workout.title}
        </h3>
        <hr className="bg-gray-1 my-2" />
        <p className="text-gray-500 text-sm">
          <span className="font-semibold">Loads (kg): </span>
          {workout?.load}
        </p>
        <p className="text-gray-500 mt-1 text-sm">
          <span className="font-semibold">Reps: </span>
          {workout?.reps}
        </p>
        <button
          className="bg-red-100 text-red-500 text-sm px-2 py-1 rounded absolute right-5 active:scale-90 bottom-4"
          onClick={handleDelete}
        >
          Delete
        </button>
        <p className="text-xs mt-2 text-gray-400">
          {formatDistance(new Date(workout?.createdAt), new Date(), {
            addSuffix: true,
          })}
        </p>
      </div>
    </>
  );
};

export default SingleWorkout;
