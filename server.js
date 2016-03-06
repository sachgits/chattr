var express = require('express'),
    app = express(),
    port = process.env.PORT || 8888;

var accountSid = 'ACbc279467413881d066feb09a9337a17c'; 
var authToken = 'e2d435532e2bc062c87cc1a66485259c'; 
 
var client = require('twilio')(accountSid, authToken); 

require('./server/config/express')(app);

require('./server/config/routes')(app, client);

app.listen(port, function() {
    console.log('Server up and running at: ' + port);   
});