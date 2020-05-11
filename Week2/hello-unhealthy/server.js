'use strict';

const express = require('express');
const app = express();

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

var requestCount = 0;

app.get('/', function (req, res) {
   console.log('login ok!')
   res.send("You've hit " + os.hostname());
})

app.get('/healthcheck', function (req, res) {
   if ( requestCount > 5 ) {
    res.status(500);
    res.send("Internal Server Error :'-(");
   } else {
      res.send('ok');
   }
})

console.log('Server starting');
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
