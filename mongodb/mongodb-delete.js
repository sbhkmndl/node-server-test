var {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser: true}, (err, db)=>{
  if(err){
    return console.log('unable to connect to the database', err);
  }

//Delete Many records
// db.db('TodoApp').collection('Todoso').deleteMany({firstName: 'Soubhik'}).then((result)=>{
//   console.log(result);
// });

//Delete One record
// db.db('TodoApp').collection('Todoso').deleteOne({firstName: 'Soubhik'}).then((result)=>{
//   console.log(result);
// });

//findOneAndDelete
// db.db('TodoApp').collection('Todoso').findOneAndDelete({_id: ObjectID("5b6eead9e7b05c067c588723")}).then((result)=>{
//   console.log(result);
// });


db.close();
});
