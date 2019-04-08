var express = require('express');
var chalk = require('chalk');
var app = express();
var router = express.Router();
var port = process.env.PORT || 80;

const tickets = require('./tickets');

router.get('/list', function(req, res) {
    res.status(200).send('List of all tickets');
});


router.get('/ticket/:id',(req, res) =>{
    const ticket = tickets.find(t => t.id === parseInt(req.params.id));
    if(!ticket) res.status(404).send('Ticket not found.');
    res.send(ticket);
 
 });


 router.post('/ticket', (req,res) => {
    const ticket = {
        id: tickets.length+1,
        created_at: req.body.created_at,
        updated_at: req.body.updated_at,
        type: req.body.type,
        subject: req.body.subject,
        description: req.body.description,
        priority: req.body.priority,
        status: req.body.status,
        recipient: req.body.recipient,
        submitter: req.body.submitter
    };
    if( !ticket.created_at || 
        !ticket.updated_at || 
        !ticket.type || 
        !ticket.subject || 
        !ticket.description || 
        !ticket.priority || 
        !ticket.status || 
        !ticket.recipient ||
        !ticket.submitter) res.status(404).send('No complete ticket information.');
    tickets.push(ticket);
    res.send(ticket);
})

app.use('/ticket', router);
app.use('/list', router);
app.use('/id', router);
app.use('/rest', router);
app.use(express.json());


app.listen(port, function() {
    console.log("Node app is running at localhost:" + port)
  });