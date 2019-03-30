var express = require('express');
var chalk = require('chalk');
var app = express();
var router = express.Router();
var port = process.env.PORT || 80;

router.get('/test', function(req, res) {
    res.status(200).send('Hello world');
});
router.get('/list', function(req, res) {
    res.status(200).send('Get all tickets');
});

app.use('/test', router);
app.use('/rest', router);

app.listen(port, function() {
    console.log("Node app is running at localhost:" + port)
  });