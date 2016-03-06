
module.exports = function(client, to, from, body) {
    client.messages.create({ 
    	to: to, 
    	from: from, 
    	body: body,   
    }, function(err, message) { 
    	if (err) {
          console.error('Could not send message');
          console.error(err);
        } else {
          console.log('Message sent!');
        }
    });
}