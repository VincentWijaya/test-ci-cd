const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Hello world',
    success: true
  });
});

app.listen(3000, () => {
  console.log('Running on port 3000')
});