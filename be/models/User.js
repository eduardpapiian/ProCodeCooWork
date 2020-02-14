const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
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
