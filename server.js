var express = require('express'),
app = express();

server.set('port', process.env.PORT || 4000);
server.use(express.static(require('path').join(__dirname, '/public')));


require('http').createServer(server).listen(server.get('port'), function () {
    console.log('Server listening on port ' + server.get('port'));
});
