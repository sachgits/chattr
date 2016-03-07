var express = require('express'),
    twilio = require('twilio'),
    messageService = require('../services/messageService');

module.exports = function(app, client, io) {
    app.post('/sendMessage', function(req, res) {
        var to = req.body.to,
            from = req.body.from,
            msg = req.body.msgBody;
        
        messageService(client, to, from, msg);    
        
        res.end();
    });
    
    app.post('/incoming', function (req, res) {
      res.writeHead(200, {
        'Content-Type':'text/xml'
      });
      var message = req.body;
      io.emit('messageReceived', { from: message.From,  body: message.Body });
      res.end();     
    });
};