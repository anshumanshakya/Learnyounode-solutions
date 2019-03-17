var http = require('http');
var map = require('through2-map') 

var fs = require('fs');

var server = http.createServer(function (req, res) {  
       if (req.method !== 'POST') {
        return res.end('send me a POST\n')
      }
       // request handling logic...
       //fs.createReadStream(process.argv[3]).pipe(res);
       req.pipe(map(function (chunk) {  
       return chunk.toString().toUpperCase();
     })).pipe(res) 

     })  
     server.listen(process.argv[2]);