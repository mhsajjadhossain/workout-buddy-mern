/**
 * Title: User Route
 * Description: user route
 * Author: M.h Sajjad Hossain Ripon
 * Data: Tue,2023-01-03
 * Time: 10:50:03.000-05:00
 */

const express = require("express");
const { userLogin, userSignup } = require("../controller/userController");
const router = express.Router();

// login route
router.post("/login", userLogin);
// signup route
router.post("/signup", userSignup);
// logout route
router.post("/logout", () => {});

module.exports = router;
