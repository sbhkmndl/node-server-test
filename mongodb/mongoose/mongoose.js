const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
var db = mongoose.connect('mongodb://localhost:27017/Users', { useNewUrlParser: true });

var user = mongoose.model('user', {
  name:{
    type: String,
    require: true,
    trim: true,
    minlength: 1
  }, email:{
    type: String,
    require: true,
    minlength: 1,
    trim: true
  }, age:{
    type: Number,
    default: 18
  }
});

var newUser = new user({
  name: 'Soubhik',
  email: 'soubhik@email.com',
  age: 22
});

newUser.save().then((result)=>{
  console.log('Successfully added to database', result);
  mongoose.connection.close();
}, (err)=>{
  console.log('Unable to add to database',err);
});
