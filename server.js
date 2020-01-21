var express = require('express');
var bodyParser = require('body-parser');

var app = express();

const port = process.env.port || 5000;

app.listen(port, () => console.log("Lisening on port "+port));

app.get('/express_backend', (req, res) => {
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
  });