/**
 * Title: App Header
 * Description: App Header
 * Author: M.h Sajjad Hossain Ripon
 * Data: Sun,2022-12-25
 * Time: 01:59:22.000-05:00
 */

import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <nav className="mainNav bg-white">
          <div className="container">
            <div className="row items-center">
              <div className="col-4">
                <h2 className="text-2xl text-gray-800 font-bold">
                  WorkoutBuddy
                </h2>
              </div>
              <div className="col-8">
                <ul className="flex items-center justify-end">
                  <li>
                    <Link to="/" className="text-gray-800 py-5 px-4 block">
                      Workouts
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="text-gray-800 py-5 px-4 block">
                      Create Workouts
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
