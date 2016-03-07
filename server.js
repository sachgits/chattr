var express = require('express'),
    app = express(),
    port = process.env.PORT || 8888;

var accountSid = 'AC3bff0bf86894c756f2eb529c3898b962'; 
var authToken = 'd21bc263b230b0cfe44f844c03c80acf'; 
 
var client = require('twilio')(accountSid, authToken); 

require('./server/config/express')(app);

var server = app.listen(port, function() {
    console.log('Server up and running at: ' + port);   
});

var io = require('./server/config/sockets')(server);
require('./server/config/routes')(app, client, io);