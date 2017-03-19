//---------------- SETUP -------------------
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const session = require('express-session')



const app = express();

// app.use( bodyParser.urlencoded( { extended : true }));
app.use(bodyParser.json());

//---------------- STATIC FILES -------------------
app.use( express.static( path.join( __dirname , './client')));
app.use( express.static( path.join( __dirname , './client/partials')));
app.use( express.static( path.join( __dirname , './bower_components')));

//---------------- SESSIONS -------------------
app.use(session({
  secret: 'mekele',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))

app.get('/', function(req, res, next) {
  var sesh = req.session
  console.log(`fart`);
})

//---------------- DATABASE -------------------
require('./server/config/mongoose.js');

//---------------- ROUTES -------------------
require("./server/config/routes.js")(app);

//---------------- SERVER LISTENER -------------------
const port = 8000;
app.listen( port , function(){
  console.log(`Listening to port ${port} for 'BucketShare'`);
});
