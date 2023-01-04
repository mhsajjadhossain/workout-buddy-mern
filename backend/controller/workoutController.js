/**
 * Title: workout controllers
 * Description: workout controllers
 * Author: M.h Sajjad Hossain Ripon
 * Data: Wed,2022-12-21
 * Time: 18:16:46.000-05:00
 */

const { default: mongoose } = require("mongoose");
const Workout = require("../models/Workout");

// get all workouts
const getAllWorkouts = async (req, res) => {
  try {
    const user_id = req.user?._id;
    const workouts = await Workout.find({ user_id }).sort({ createdAt: -1 });
    res.status(200).json(workouts);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// get a single workouts
const getSingleWorkout = async (req, res) => {
  try {
    const { id } = req.params;

    // if this workout id is not valid
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "No such Workout" });
    }

    const workout = await Workout.findById(id);
    console.log("workout :", workout);

    // if this workout does not exists
    if (!workout) {
      return res.status(404).json({ error: "No such Workout" });
    }
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// create new workout
const createWorkout = async (req, res) => {
  const { title, load, reps } = req.body;
  const user_id = req.user?._id;
  try {
    const workout = await Workout.create({
      title,
      load,
      reps,
      user_id,
    });

    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
// delete a  workout
const deleteSingleWorkout = async (req, res) => {
  try {
    const { id } = req.params;

    // if this workout id is not valid
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "No such Workout" });
    }

    const workout = await Workout.findOneAndDelete({ _id: id });

    // if this workout does not exists
    if (!workout) {
      return res.status(404).json({ error: "No such Workout" });
    }
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// update a workout
const updateWorkout = async (req, res) => {
  try {
    const { id } = req.params;

    // if this workout id is not valid
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "No such Workout" });
    }

    const workout = await Workout.findOneAndUpdate(
      { _id: id },
      { ...req.body }
    );

    // if this workout does not exists
    if (!workout) {
      return res.status(404).json({ error: "No such Workout" });
    }
    res.status(200).json(workout);
  } catch (error) {
    console.log("error :", error);
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createWorkout,
  getAllWorkouts,
  getSingleWorkout,
  deleteSingleWorkout,
  updateWorkout,
};
