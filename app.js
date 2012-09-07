var app = require('express')(),
	server = require('http').createServer(app);
	
	server.listen(8080);
	
var io = require('socket.io').listen(server);



app.get('/', function(req, res) {
	res.sendfile(__dirname + '/index.html');
});
app.get('/server.html', function(req, res) {
	res.sendfile(__dirname + '/server.html');
});

io.sockets.on('connection', function(socket) {
	socket.on('newFrame', function(img) {
		io.sockets.emit('setFrame', img);
	});
});
