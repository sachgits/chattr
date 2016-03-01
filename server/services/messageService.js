
module.export = function(to, from, body) {
    client.messages.create({ 
    	to: to, 
    	from: from, 
    	body: body,   
    }, function(err, message) { 
    	console.log(message.sid); 
    });
}