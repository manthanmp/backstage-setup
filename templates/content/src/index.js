// src/index.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

app.get('/health', (req, res) => {
  res.send('Service is healthy!');
});

app.get('/', (req, res) => {
  res.send(`Hello from ${{ parameters.componentId }}! Description: ${{ parameters.description }}`);
});

app.listen(port, () => {
  console.log(`Service ${{ parameters.componentId }} listening on port ${port}`);
});