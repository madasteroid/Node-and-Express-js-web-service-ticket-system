var express = require('express');
var chalk = require('chalk');
var app = express();
var router = express.Router();
var port = process.env.port || 80; 

router.get('/test', function(req, res) {
    res.status(200).send('Hello world');
});
router.get('/list', function(req, res) {
    res.status(200).send('Get all tickets');
});
router.post({

});

app.use('/api', router);
app.use('/test', router);

app.listen(port, function(err) {
        console.log("Your app is running at the port")});