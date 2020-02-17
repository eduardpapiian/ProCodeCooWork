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
  register: async (req) => {
    try{
      // checking if user already exist in bd
      const existedUser = await User.findOne({email: req.body.email});

      if (existedUser){
        const data = {
          status: 400,
          message: 'Email already exists'
        };
        return data;
      }

      //hash password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.pass, salt);

      //create new user
      const user = new User({
        email: req.body.email,
        password: hashedPassword
      });

      const savedUser = await user.save();

      //send token
      const token = signToken(savedUser);

      return {
        status: 200,
        token: token
      };

    }catch(err){
      console.log(err);
      return err
    }
  },
  login: async (req) => {
    try{

      //Checking if email exists
      const user = await User.findOne({email: req.body.email});

      if(!user) return { status: 400, message: 'User not found' };

      const validPass = await user.comparePwd(req.body.pass);

      if(!validPass) return { status: 400, message: 'Invalid password' };

      //Send token
      const token = signToken(user);
      console.log(token);

      return {
        status: 200,
        token: token
      }

    }catch(err){
      console.log(err);
      return err
    }
  }
};
