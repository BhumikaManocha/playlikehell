var mongoose = require('mongoose');
const schema = mongoose.Schema;

var UserSchema = new schema({
    email: {
      type: String,
      unique: true,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    }
  });

var User = mongoose.model('users', UserSchema);
module.exports = User;