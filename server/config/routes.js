var express = require('express'),
    messageService = require('../services/messageService');

module.exports = function(app, client) {
    app.post('/sendMessage', function(req, res) {
        var to = req.body.to,
            from = req.body.from,
            msg = req.body.msgBody;
        
        messageService(client, to, from, msg);    
        
        res.end('Message Sent!');
    });
};