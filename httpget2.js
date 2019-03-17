var http = require('http');

var bl = require('bl')  

http.get(process.argv[2], function callback(response) {
	     response.pipe(bl(function (err, data) { 
	     	var s=data.toString();

	     	console.log(s.length);
	     	console.log(s);
	      }));  
		
});