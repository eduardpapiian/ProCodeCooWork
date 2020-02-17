const express = require('express');
const router = express.Router();
const Ajv = require('ajv');
// const userSchema = require('../schemas/user');
const UserController = require('../controllers/userController')
const { registerValidation, loginValidation } = require('../schemas/user');


const ajv = new Ajv(); // options can be passed, e.g. {allErrors: true}


// CREATE NEW USER
router.post('/register', registerValidation, async function(req, res, next) {
  try{

    const data = await UserController.register(req);
    if(data.status === 200){
      res.header('auth-token', data.token).send({token: data.token});
    }else{
      res.status(400).send({message: data.message})
    }

  }catch(err){
    console.log(err)
  }
});

// CREATE NEW USER
router.post('/login', loginValidation, async function(req, res, next) {
  try{
    const data = await UserController.login(req);
    if(data.status === 200){
      res.header('auth-token', data.token).send({token: data.token});
    }else{
      res.status(400).send({message: data.message})
    }
  }catch(err){
    console.log(err)
  }
});

module.exports = router;
