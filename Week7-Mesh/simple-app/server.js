'use strict';

const express = require('express');
const app = express();

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

let deploymentGroup = process.env.DEPLOYMENT_GROUP
if ( deploymentGroup == null ) {
    console.log('Please specify the DEPLOYMENT_GROUP env var');
    process.exit(1);
}

app.get('/', function (req, res) {
   console.log('Called GET on', deploymentGroup);
   res.send('Deployment Group: ' + deploymentGroup);
})

console.log('Simple webapp Starting');
console.log('Deployment Group:', deploymentGroup);
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
