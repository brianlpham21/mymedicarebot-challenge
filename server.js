'use strict';

const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

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

app.listen(port, () => console.log(`Listening on port ${port}`));
