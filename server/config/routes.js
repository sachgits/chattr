var express = require('express'),
    twilio = require('twilio'),
    messageService = require('../services/messageService');

module.exports = function(app, client) {
    app.post('/sendMessage', function(req, res) {
        var to = req.body.to,
            from = req.body.from,
            msg = req.body.msgBody;
        
        messageService(client, to, from, msg);    
        
        res.end();
    });
    
    app.post('/incoming', function (req, res) {
      var resp = new twilio.TwimlResponse();
          resp.message('Thanks for subscribing!');
          res.writeHead(200, {
            'Content-Type':'text/xml'
          });
          console.log(req, res);
          res.end();
    });
};