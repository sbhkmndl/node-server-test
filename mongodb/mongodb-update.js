var {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser: true}, (err, db)=>{
  if(err){
    return console.log('unable to connect to the database', err);
  }

db.db('TodoApp').collection('Todoso').findOneAndUpdate({
  _id: ObjectID('5b6eecbfe7b05c067c58877f')
},{
  $set: {
    firstName: 'Soubhik'
  }
},{
  returnOriginal: false
}).then((result)=>{
  console.log(result);
});


db.close();
});
