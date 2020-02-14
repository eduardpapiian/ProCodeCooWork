const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const randomstring = require('randomstring');
const User = require('../models/User')

signToken = user => {
  return jwt.sign({
    iss: "ProCodeCooWork",
    sub: user.id,
    iat: new Date().getTime(), // current time
    exp: new Date().setDate(new Date().getDate() + 1)
  }, process.env.TOKEN_SECRET)
};

module.exports = {
  register: async (req, res) => {
    // checking if user already exist in bd
    const existedUser = await User.findOne({email: req.body.email})
    if (existedUser){
      return res.status(400).send({message: 'Email already exists'});
    }
  }
};
