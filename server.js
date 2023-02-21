var http = require('http');
var fs = require("fs");

http.createServer(function (req, res) {
    fs.rename('mynewfile1.txt', "myrenamefile.txt", function (err) {
        if (err) throw err;
        console.log('File Renamed!');
    });
}).listen(8080)