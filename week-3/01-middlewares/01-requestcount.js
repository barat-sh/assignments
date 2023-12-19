const request = require('supertest');
const assert = require('assert');
const express = require('express');
const PORT = 3001;

const app = express();
let requestCount = 0;

const middelWare = (req, res, next) => {
  try {
    requestCount++
  } catch (err) {
    console.log(err)
  } finally {
    next()
  }
}

app.use(middelWare);
// Your task is to create a global middleware (app.use) which will
// maintain a count of the number of requests made to the server in the global
// requestCount variable

app.get('/user', function(req, res) {
  console.log(requestCount)
  res.status(200).json({ name: 'john' });
});

app.post('/user', function(req, res) {
  console.log(requestCount);
  res.status(200).json({ msg: 'created dummy user' });
});

app.get('/requestCount', function(req, res) {
  console.log(requestCount);
  res.status(200).json({ requestCount });
});

app.listen(PORT, () => {
  console.log("server hitting...")
})
module.exports = app;
