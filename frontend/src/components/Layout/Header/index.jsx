/**
 * Title: App Header
 * Description: App Header
 * Author: M.h Sajjad Hossain Ripon
 * Data: Sun,2022-12-25
 * Time: 01:59:22.000-05:00
 */

import React from "react";
import { Link } from "react-router-dom";
import useAuthContext from "../../../hooks/useAuthContext";
import useLogout from "../../../hooks/useLogout";

const Header = () => {
  const { user } = useAuthContext();
  console.log("user :", user);
  const { logout } = useLogout();
  const handleClick = () => logout();
  return (
    <>
      <header>
        <nav className="mainNav bg-white">
          <div className="container">
            <div className="row items-center h-20">
              <div className="col-4">
                <h2 className="text-2xl text-gray-800 font-bold">
                  WorkoutBuddy
                </h2>
              </div>
              <div className="col-8 flex items-center justify-end">
                {!user && (
                  <ul className="flex items-center">
                    <li>
                      <Link
                        to="/login"
                        className="text-gray-800 px-4 block font-medium text-sm"
                      >
                        Login
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/signup"
                        className="text-gray-800 px-4 block font-medium text-sm"
                      >
                        Sign up
                      </Link>
                    </li>
                  </ul>
                )}

                {/* loggedIn user */}

                {user && (
                  <div>
                    <span>{user?.email}</span>
                    <button
                      className="inline-block ml-3 bg-gray-300 rounded px-4 py-2 text-sm font-medium active:scale-95 hover:bg-gray-400"
                      onClick={handleClick}
                    >
                      Logout
                    </button>
                  </div>
                )}

                {/* logged in user */}
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
