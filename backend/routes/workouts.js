/**
 * Title: workout route
 * Description: workout route
 * Author: M.h Sajjad Hossain Ripon
 * Data: Thu,2022-12-15
 * Time: 17:08:33.000-05:00
 */
const express = require("express");
const {
  createWorkout,
  getAllWorkouts,
  getSingleWorkout,
  deleteSingleWorkout,
  updateWorkout,
} = require("../controller/workoutController");
const Workout = require("../models/Workout");
const router = express.Router();

/**
 * @method GET
 * @description get all workouts
 */
router.get("/", getAllWorkouts);

/**
 * @method GET
 * @description get single workout
 */
router.get("/:id", getSingleWorkout);

/**
 * @method POST
 * @description create new workout
 */
router.post("/", createWorkout);

/**
 * @method DELETE
 * @description Delete single workout
 */
router.delete("/:id", deleteSingleWorkout);

/**
 * @method PATCH
 * @description update single workout
 */
router.patch("/:id", updateWorkout);

module.exports = router;
