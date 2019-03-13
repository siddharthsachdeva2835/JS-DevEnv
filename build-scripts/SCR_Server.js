const express = require('express');
const path = require('path');
const open = require('open');

let app = express();

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../index.html'));
})

app.listen(3000, function(err) {
  if(err) {
    console.log(err);
  }
  else {
    open('http://localhost:3000');
  }
})
