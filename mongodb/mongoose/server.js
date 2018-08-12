var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./models/mongoose');
var {Todo} = require('./models/todos');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());
app.post('/todos', (req,res)=>{
  var todos = new Todo({
    text: req.body.text
  });
  todos.save().then((doc)=>{
    res.send(doc);
  },
  (err)=>{
    res.status(400).send(err);
  });

});

app.get('/todos',(req,res)=>{
  Todo.find().then((doc)=>{
    res.send({doc});
  }, (err)=>{
    res.send(err);
  });
});

app.listen(3000, ()=>{
  console.log('Started on port 3000');
});

// var todos = new Todo({
//   text: 'need to do',
// });
//
// todos.save().then((result)=>{
//   console.log('Successfully added to database', result);
//   mongoose.connection.close();
// }, (err)=>{
//   console.log('Unable to add to database',err);
// });
