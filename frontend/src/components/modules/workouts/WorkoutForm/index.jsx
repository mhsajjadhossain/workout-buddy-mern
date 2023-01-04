import React, { useState } from "react";
import config from "../../../../config";
import useAuthContext from "../../../../hooks/useAuthContext";
import useWorkoutContext from "../../../../hooks/useWorkoutContext";

const WorkoutForm = () => {
  const { dispatch } = useWorkoutContext();
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const { user } = useAuthContext();
  /**
   * @method handleFormSubmit()
   * @des submit form data to the api
   * @arg e
   */
  const handleFormSubmit = async (e) => {
    try {
      e.preventDefault();
      if (!user)
        return setErrorMessage("You are not authorized to make this request");
      const workoutObj = await { title, load, reps };

      const res = await fetch(`${config.baseUrl}/api/workouts`, {
        method: "POST",
        body: JSON.stringify(workoutObj),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      });
      const data = await res.json();

      if (!res.ok) {
        setErrorMessage(data.error);
      }
      if (res.ok) {
        setErrorMessage(null);
        setTitle("");
        setLoad("");
        setReps("");
        dispatch({
          type: "CREATE_WORKOUT",
          payload: data,
        });
      }
    } catch (error) {}
  };

  return (
    <>
      <div className="w-full mt-[30px] bg-white px-5 py-10 shadow-sm">
        <h3 className="text-2xl text-gray-800 font-semibold text-center mb-[10px]">
          Add a new workout
        </h3>
        <hr className="bg-gray-1 mb-[10px]" />
        <form onSubmit={handleFormSubmit}>
          {/* singel form element */}
          <div className="mb-[20px]">
            <label htmlFor="title">Title: </label>
            <input
              type="text"
              placeholder="Example: Push Ups"
              id="title"
              required
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              className="w-full block bg-transparent border border-gray-300 rounded px-3 py-2"
            />
          </div>
          {/* singel form element */}
          {/* singel form element */}
          <div className="mb-[20px]">
            <label htmlFor="loads">Loads(kg): </label>
            <input
              type="number"
              placeholder="Example: 5(kg's)"
              id="loads"
              required
              onChange={(e) => setLoad(e.target.value)}
              value={load}
              className="w-full block bg-transparent border border-gray-300 rounded px-3 py-2"
            />
          </div>
          {/* singel form element */}
          {/* singel form element */}
          <div className="mb-[20px]">
            <label htmlFor="reps">Reps: </label>
            <input
              type="number"
              required
              placeholder="Example: 10"
              id="reps"
              onChange={(e) => setReps(e.target.value)}
              value={reps}
              className="w-full block bg-transparent border border-gray-300 rounded px-3 py-2"
            />
          </div>
          {/* singel form element */}

          <button className="w-full py-2 bg-cyan-400 text-white font-semibold text-xl cursor-pointer rounded">
            Add Workout
          </button>
        </form>
        {/* error message */}
        {errorMessage && (
          <p className="text-red-700 p-2 rounded mt-2 text-sm bg-red-100">
            {errorMessage}
          </p>
        )}
        {/* error message */}
      </div>
    </>
  );
};

export default WorkoutForm;
