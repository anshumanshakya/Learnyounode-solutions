var http = require('http');

var url = require('url');

var parseQuery = function(url){

	if(url.pathname=== '/api/parsetime'){
		var result= new Date(url.query.iso)
		return {
    		hour: result.getHours(),
    		minute: result.getMinutes(),
    		second: result.getSeconds()
  		}	
	}
	else if(url.pathname=== '/api/unixtime'){
		var result= new Date(url.query.iso)
		return {
    		unixtime : result.getTime()	
    	}
	}

}



var server = http.createServer(function (req, res) {  
       // request handling logic...
       //fs.createReadStream(process.argv[3]).pipe(res);
       if (req.method !== 'GET') {
        return res.end('send me a GET request\n')
      }

      res.writeHead(200, { 'Content-Type': 'application/json' });

      url = url.parse(req.url,true);

      res.end(JSON.stringify(parseQuery(url)))

     })  
     server.listen(process.argv[2]);