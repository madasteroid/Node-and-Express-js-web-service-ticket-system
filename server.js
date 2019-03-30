var express = require('express');
var chalk = require('chalk');
var app = express();
var router = express.Router();
var port = process.env.PORT || 80;


router.get('/list', function(req, res) {
    res.status(200).send('Endpoint to get all tickets');
});
router.get('/ticket/id', function(req, res) {
    res.status(200).send('Endpoint to get a single ticket');
});
router.post('/ticket', function(req, res){
    res.status(200).send('Endpoint to create a new ticket');
});

app.use('/ticket', router);
app.use('/list', router);
app.use('/id', router);
app.use('/rest', router);


app.listen(port, function() {
    console.log("Node app is running at localhost:" + port)
  });