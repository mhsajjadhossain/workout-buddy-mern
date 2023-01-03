/**
 * Title: User Controller
 * Description: User Login register controller
 * Author: M.h Sajjad Hossain Ripon
 * Data: Tue,2023-01-03
 * Time: 10:58:02.000-05:00
 */

const jwt = require("jsonwebtoken");
const env = require("../config/enviroments");
const User = require("../models/UserModel");

/**
 * @method createToken()
 * @arg _id
 * @des generate token with jwt
 */
const createToken = (_id) => {
  console.log("_id :", _id);
  return jwt.sign({ _id }, env.secret, { expiresIn: "3d" });
};

// login user controller
const userLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    const token = await createToken(user._id.toString());
    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// register user controller
const userSignup = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const user = await User.signup(username, email, password);
    const token = await createToken(user._id.toString());
    res.status(200).json({ email, token });
  } catch (error) {
    console.log("error :", error);
    res.status(400).json({ error: error.message });
  }
};
module.exports = { userLogin, userSignup };
