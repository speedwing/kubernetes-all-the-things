'use strict';

const express = require('express');
const app = express();

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

app.get('/', function (req, res) {
   console.log('login ok!')
   res.send('ok');
})

console.log('Login server starting');

function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

sleep(10000).then(() => {
    app.listen(PORT, HOST);
    console.log(`Running on http://${HOST}:${PORT}`);
});
