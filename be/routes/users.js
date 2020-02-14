const express = require('express');
const router = express.Router();
const Ajv = require('ajv');
const userSchema = require('../schemas/user');
const UserController = require('../controllers/userController')


const ajv = new Ajv(); // options can be passed, e.g. {allErrors: true}


// CREATE NEW USER
router.post('/register', async function(req, res, next) {
  try{
    const validate = ajv.compile(userSchema);
    const isValid = validate(req.body);

    if (!isValid){
      return res.json({status: 400, message: validate.errors } );
    }

    await UserController.register(req, res)

  }catch(err){
    console.log(err)
  }
});

module.exports = router;
