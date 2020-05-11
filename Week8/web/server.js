'use strict';

if (process.env.APP_VERSION == "v2") {
    if(!process.env.LOGIN_API_HOST) {
        console.log("Version 2 requires the env var LOGIN_API_HOST to be set!");
        process.exit(1);
    }
}

const express = require('express');
const axios = require('axios');
const app = express();

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

app.use(express.static('public'))

app.get('/', function (req, res) {
   res.send('Hello World');
})


//var counter = 0;
//app.get('/my-api', function (req, res) {
//    counter = counter + 1;
//    console.log('counter: ' + counter);
//    if (counter % 5 == 0) {
//        console.log('ERROR !!!');
//        res.status(500);
//        res.send("Internal Server Error :'-(");
//    } else {
//        res.send("ok");
//    }
//})

app.get('/login', function (req, res) {
    if(process.env.LOGIN_API_HOST) {
        console.log("calling login service")
        axios
            .get('http://' + process.env.LOGIN_API_HOST)
            .then(response => {
                res.status(response.status);
                res.send("ok");
            })
            .catch(error => {
                res.status(500);
                res.send("Internal Server Error :'-(");
            })
    } else {
        console.log("login ok!")
        res.send("ok");
    }
})

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
