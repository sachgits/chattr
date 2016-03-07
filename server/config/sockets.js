var sockets = require('socket.io');

module.exports = function(server) {
    var io = sockets(server);
    io.on('connection', function(socket) {
      console.log('a user connected');
     
      socket.on('disconnect', function() {
        console.log('user disconnected');
      });
    });
    
    return io;
};