const mongoose = require('mongoose')
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
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

// COMPARE PASSWORD WHEN LOGIN
userSchema.methods.comparePwd = async function (pwd)  {
  try {
    const result = await bcrypt.compare(pwd, this.password)
    return result
  }catch (err){
    throw new Error(err)
  }
};
module.exports = mongoose.model('User', userSchema);
