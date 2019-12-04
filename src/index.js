/* Main Node.js server file*/

const express = require('express');
const app = express();

/* Port Variables*/
const PORT = process.env.PORT || 20213;

//Middleware for static files
app.use('/css', express.static(__dirname + '/css'));
app.use('/js', express.static(__dirname + '/js'));
app.use('/assets', express.static(__dirname + '/assets'));

//Main Route
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.listen(PORT, function() {
    console.log(`Listening :${PORT}`);
});