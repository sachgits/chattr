var accountSid = 'AC3bff0bf86894c756f2eb529c3898b962'; 
var authToken = '[AuthToken]'; 
 
var client = require('twilio')(accountSid, authToken); 
 
client.messages.create({ 
	to: "4792201910", 
	from: "+14794399408", 
	body: "What's up yo?",   
}, function(err, message) { 
	console.log(message.sid); 
});