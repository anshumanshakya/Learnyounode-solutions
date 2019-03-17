var fs = require('fs');

var lines=0;

function count(callback){
fs.readFile(process.argv[2], function countline(err, buf){

	var s=buf.toString();
	var arr=s.split("\n");
	lines=arr.length-1;
	callback();
});
}

function print(){
	console.log(lines);
}

count(print);