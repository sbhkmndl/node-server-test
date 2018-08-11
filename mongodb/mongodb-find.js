var {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', {useNewUrlParser: true}, (err, db)=>{
  if(err){
    return console.log('unable to connect to the database', err);
  }

  // db.db('TodoApp').collection('Todoso').find({_id : ObjectID("5b6d76e6e230bd9dd06edf87")}).toArray().then((docs)=>{
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err)=>{
  //   console.log('Unable to fetch data from database');
  // });

  // db.db('TodoApp').collection('Todoso').find().count().then((count)=>{
  //   console.log(count);
  // }, (err)=>{
  //   console.log('Unable to fetch data from database');
  // });

//Delete Many records
db.db('TodoApp').collection('Todoso').deleteMany({firstName: 'Soubhik'}).then((result)=>{
  console.log(result);
});

db.close();
});
