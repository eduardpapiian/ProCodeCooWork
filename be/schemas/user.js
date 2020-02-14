const user = {
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

module.exports = user;
