var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');

var {mongoose} = require('./models/mongoose');
var {Todo} = require('./models/todos');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

//add todos to the database
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

//get all todos
app.get('/todos',(req,res)=>{
  Todo.find().then((doc)=>{
    res.send({doc});
  }, (err)=>{
    res.send(err);
  });
});

//get indivisusal todos
app.get('/todos/:id', (req,res)=>{
  var id = req.params.id;
  if(!ObjectID.isValid(id)){
      return res.status(404).send('Not a valid ID');
  }
  Todo.findById(id).then((result)=>{
    if(!result){
      return res.status(404).send('data not found');
    }
    res.send({result});
  }).catch((err)=>{
    res.status(400).send();
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
