'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const https = require('https');
const querystring = require('querystring');

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

// first challenge GET method
app.get('/reverse/:string', function(req, res) {
  const term = req.params.string;
  const newTerm = term.split('').reverse().join('');

  res.send({result: newTerm});
});

app.post('/test', function(req, res) {
  res.send({hey: 'hey'})
})

// second challenge POST method
app.post('/url', function(req, res) {
  const url = req.body.url;
  const host = url.split('/')[2];
  const path = url.split('/')[3];
  const method = req.body.method;
  const data = req.body.text;

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
    const postData = querystring.stringify({
      postData: data
    });

    // request option
    const options = {
      host: host,
      port: 443,
      method: 'POST',
      path: path,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': postData.length
      }
    };

    // request object
    const req = https.request(options, (resp) => {
      let result = '';
      resp.on('data', function (chunk) {
        result += chunk;
      });
      resp.on('end', function () {
        res.send({result: result})
      });
      resp.on('error', function (err) {
        console.log(err);
      })
    });

    // req error
    req.on('error', function (err) {
      console.log(err);
    });

    //send request witht the postData form
    req.write(postData);
    req.end();
  }
});

app.listen(port, () => console.log(`Listening on port ${port}`));
