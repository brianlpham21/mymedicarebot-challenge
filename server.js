'use strict';

const express = require('express');

const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
});

app.get('/reverse/:string', function(req, res) {
  const term = req.params.string;
  const newTerm = term.split('').reverse().join('');

  res.send({result: newTerm});
});

app.get('/url', function(req, res) {

  res.send({result: 'GOTTEN!'});
});

app.post('/url', function(req, res) {
  const term = req.body.url;
  res.send({result: 'Posted to ' + term});
});

app.listen(port, () => console.log(`Listening on port ${port}`));
