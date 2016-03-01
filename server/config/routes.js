var express = require('express'),
    messageService = require('../services/messageService');

module.exports = function(app) {
    app.post('/sendMessage', function(req, res) {
        var msg = req.body.message;
        console.log('Send Message', msg);
    });
};