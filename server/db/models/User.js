const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const UserSchema = new Schema({
  first_name: {
    type: String,
  },
  email: {
    type: String,
    unique: true
  },
  password: {
    type: String,
  },
}, { strict: true, timestamps: true, versionKey: false })


const User = model("User", UserSchema);

module.exports = User;