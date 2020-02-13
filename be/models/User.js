const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  name:{
    type: String,
    min: 2,
    max: 200
  },
  email: {
    type: String,
    lowercase:true,
    max: 255,
    min: 6,
    required: true,
  },
  password: {
    type: String,
    min: 6,
    max: 1000,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('User', userSchema);
