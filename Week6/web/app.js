var express = require('express');
var axios = require('axios');
var app = express();

app.use(express.static('public'))

app.get('/', function (req, res) {
   res.send('Hello World');
})

var counter = 0;

app.get('/my-api', function (req, res) {
    counter = counter + 1;
    console.log('counter: ' + counter);
    if (counter % 5 == 0) {
        console.log('ERROR !!!');
        res.status(500);
        res.send("Internal Server Error :'-(");
    } else {
        res.send("ok");
    }
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
})
