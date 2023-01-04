const jwt = require("jsonwebtoken");
const env = require("../config/enviroments");
const User = require("../models/UserModel");

const requireAuth = async (req, res, next) => {
  // verify authentication
  const { authorization } = req.headers;
  console.log("authorization :", authorization);
  if (!authorization) {
    return res.status(401).json({ error: "Authorization token required" });
  }

  const token = authorization.split(" ")[1];

  try {
    const { _id } = await jwt.verify(token, env.secret);
    req.user = await User.findOne({ _id }).select("_id");
    next();
  } catch (error) {
    console.log("error :", error);
    return res.status(401).json({ error: "unauthorized user" });
  }
};

module.exports = requireAuth;
