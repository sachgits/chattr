var express = require('express'),
    app = express(),
    port = process.env.PORT || 8888;

var accountSid = 'AC3bff0bf86894c756f2eb529c3898b962'; 
var authToken = '[AuthToken]'; 
 
var client = require('twilio')(accountSid, authToken); 

require('./server/config/express')(app);

require('./server/config/routes')(app);

app.listen(port, function() {
    console.log('Server up and running at: ' + port);   
});