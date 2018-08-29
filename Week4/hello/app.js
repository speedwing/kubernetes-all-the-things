const http = require('http');
const os = require('os');

console.log("Hello server starting...");

var handler = function(request, response) {
  console.log("Received request from " + request.connection.remoteAddress);
  response.writeHead(200);
  response.end("Version two running on " + os.hostname() + " !!11!1!oneone!!1\n");
};

var www = http.createServer(handler);
www.listen(8080);

