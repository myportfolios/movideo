const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//1. Define user model
const userSchema = new Schema({
  email: { type: String, unique: true, lowercase: true },
  password: String
});
//2. Create the model class
const UserClass = mongoose.model("user", userSchema); //this line informs mongoose of our new schema - userSchema
//UserClass represents a class of all users

// 3. Export the model
module.exports = UserClass;

/*
//convention for model is to be singular and to start with uppercase
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model("users", UserSchema);

module.exports = User;

*/
