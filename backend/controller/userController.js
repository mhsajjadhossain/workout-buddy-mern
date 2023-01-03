/**
 * Title: User Controller
 * Description: User Login register controller
 * Author: M.h Sajjad Hossain Ripon
 * Data: Tue,2023-01-03
 * Time: 10:58:02.000-05:00
 */

const User = require("../models/UserModel");

// login user controller
const userLogin = async (req, res) => {
  res.json({ msg: "login user" });
};
// register user controller
const userSignup = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const user = await User.signup(username, email, password);
    res.status(200).json({ email, user });
  } catch (error) {
    console.log("error :", error);
    res.status(400).json({ error: error.message });
  }
};
module.exports = { userLogin, userSignup };
