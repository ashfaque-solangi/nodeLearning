const mongoose = require('mongoose');

  const Schema = mongoose.Schema;
  
  const UserSchema = new Schema({
    name: String,
    email:String,
    password:String,
    contact:String,
  });


  const userModel = mongoose.model('users', UserSchema);

  module.exports = userModel;