const express = require('express');
const router = express.Router();
const Ajv = require('ajv');
// const userSchema = require('../schemas/user');
const UserController = require('../controllers/userController')
const { registerValidation } = require('../schemas/user');


const ajv = new Ajv(); // options can be passed, e.g. {allErrors: true}


// CREATE NEW USER
router.post('/register', registerValidation, async function(req, res, next) {
  try{
    // const validate = ajv.compile(userSchema);
    // const isValid = validate(req.body);

    // if (!isValid){
    //   return res.json({status: 400, message: validate.errors } );
    // }

    const data = await UserController.register(req, res)
    if(data.status === 200){
      res.header('auth-token', data.token).send({token: data.token});
    }else{
      res.status(400).send({message: 'User already exist'})
    }

  }catch(err){
    console.log(err)
  }
});

module.exports = router;
