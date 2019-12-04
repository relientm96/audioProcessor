/* Main Node.js server file*/

const express = require('express');
const upload = require('express-fileupload');
const formidable = require('formidable');
const file = require('fs');
const app = express();

/* Port Variables*/
const PORT = process.env.PORT || 20213;

// Variable to store the current path of the uploaded file
var filePath = "";
var fileName = "";

//Middleware for static files
app.use('/css', express.static(__dirname + '/css'));
app.use('/js', express.static(__dirname + '/js'));
app.use('/assets', express.static(__dirname + '/assets'));

//Main Route
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.post('/youtube', function(req, res) {
    var form = new formidable.IncomingForm();
    form.parse(req);
    form.on('fileBegin', function(name, file) {
        file.path = __dirname + '/uploads/' + file.name;
        filePath = file.path;
        fileName = file.name;
    });
    form.on('file', function(name, file) {
        console.log("Uploaded " + file.name);
        res.send("Succesfully Uploaded File " + fileName + " at: " + filePath + " unto server");
    })
});

app.listen(PORT, function() {
    console.log(`Listening on : ${PORT}`);
});