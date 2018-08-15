'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const https = require('https');

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

app.post('/url', function(req, res) {
  const url = req.body.url;
  const method = req.body.method;

  if (method === 'get') {
    https.get(url, (resp) => {
      let data = '';

      resp.on('data', (chunk) => {
        data += chunk;
      });

      resp.on('end', () => {
        res.send({result: data})
      });
    })
      .on("error", (err) => {
        console.log("Error: " + err.message);
      });
  }
  else {
    https.post(url, (resp) => {
      let data = '';

      resp.on('data', (chunk) => {
        data += chunk;
      });

      resp.on('end', () => {
        res.send({result: data})
      });
    })
      .on("error", (err) => {
        console.log("Error: " + err.message);
      });
  }
});

app.listen(port, () => console.log(`Listening on port ${port}`));
