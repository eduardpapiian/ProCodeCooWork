const Ajv = require('ajv');
const ajv = new Ajv(); // options can be passed, e.g. {allErrors: true}

const registerValidation = (req, res, next) => {
  const schema = {
    $schema: 'http://json-schema.org/draft-07/schema#',
    type:'object',
    properties: {
      email: {
        type: 'string',
        format: 'email'
      },
      pass: {
        type: 'string',
        minLength: 6
      }
    },
    required: ['email', 'pass']
  };
  const validate = ajv.compile(schema);
  const isValid = validate(req.body);

  if (!isValid){
    res.status(400).send(validate.errors)
  }else{
    next()
  }
};



module.exports.registerValidation = registerValidation;
