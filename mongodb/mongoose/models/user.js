const mongoose = require('mongoose');

var User = mongoose.model('user', {
  name:{
    type: String,
    required: true,
    trim: true,
    minlength: 1
  }, email:{
    type: String,
    required: true,
    minlength: 1,
    trim: true
  }, age:{
    type: Number,
    default: 18
  }
});

module.exports = {User};
