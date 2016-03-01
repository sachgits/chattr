
module.exports = function(client, to, from, body) {
    client.messages.create({ 
    	to: to, 
    	from: from, 
    	body: body,   
    }, function(err, message) { 
    	console.log(err, message); 
    });
}