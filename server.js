const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

const port = process.env.PORT || 3000;
var app = express();

app.use((req, res, next) => {
  var now = new Date().toString();
  var log = `${now} : ${req.method} ${req.url}`;
  console.log(log);
  fs.appendFile('server.log', log + '\n', (err)=>{if(err) console.log('cannot connect to the server');});
  next();
});
hbs.registerPartials(__dirname + '/views/partials');
hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear();
});
hbs.registerHelper('toUpper', (text) => {
  return text.toUpperCase();
});

app.set('view engine', 'hbs');
app.get('/', (req,res)=>{
  res.render('home.hbs', {
    messase: 'welcome to our app'
  });
});

app.get('/bad', (req, res)=>{
  res.send({
    errorMessage: 'page not found',
    statusCode: 404,

  });
});

app.listen(port, ()=>{
  console.log(`Server Started on ${port} port`);
});
