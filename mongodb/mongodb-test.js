const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/', { useNewUrlParser: true }, (err, db)=>{
  if(err){
    return console.log('Unable to connect to database',err);
  }
  console.log('Connect to mongodb database');
  db.db('TodoApp').collection('Todoso').insertOne({
    firstName: 'Anirban',
    lastName: 'Adgiri'
  }, (err, result)=>{
    if(err){
      return console.log('Unable to insert data to database',err);
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
  });
  db.close();
});
