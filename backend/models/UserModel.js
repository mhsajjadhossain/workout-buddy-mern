const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      maxLength: 50,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      maxLength: 80,
    },
    password: {
      type: String,
      required: true,
      maxLength: 80,
    },
  },
  { timestamps: true }
);

// static signup method
userSchema.statics.signup = async function (username, email, password) {
  // validations
  if (!username || !email || !password) {
    throw Error("You must fill all the fields");
  }

  if (username.length > 50) {
    throw Error("usernames must be less then 50 chars");
  }
  if (email.length > 80) {
    throw Error("email must be less then 80 chars");
  }
  if (password.length > 80) {
    throw Error("password must be less then 80 chars");
  }

  if (!validator.isEmail(email)) {
    throw Error("Please enter a valid email");
  }

  if (!validator.isStrongPassword(password)) {
    throw Error("Password is not strong enough");
  }

  const exists = await this.findOne({ email });
  if (exists) {
    throw Error("Email already in use");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({ username, email, password: hash });
  return user;
};

// static login method
userSchema.statics.login = async function (email, password) {
  // validations
  if (!email || !password) {
    throw Error("You must fill all the fields");
  }

  const user = await this.findOne({ email });

  if (!user) {
    throw Error("Given email is incorrect");
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    throw Error("Given password is incorrect");
  }

  return user;
};

const User = mongoose.model("User", userSchema);
module.exports = User;
