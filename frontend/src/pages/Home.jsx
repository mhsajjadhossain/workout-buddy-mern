/**
 * Title: Home Page
 * Description: This is the main home page of the app
 * Author: M.h Sajjad Hossain Ripon
 * Data: Sun,2022-12-25
 * Time: 01:46:40.000-05:00
 */

import React from "react";
import WorkoutList from "../components/common/WorkoutList";
import WorkoutForm from "../components/modules/workouts/WorkoutForm";

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-8">
            <WorkoutList />
          </div>
          <div className="col-4">
            <WorkoutForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
