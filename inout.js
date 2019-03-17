var fs = require('fs');

var buf= fs.readFileSync(process.argv[2]);

var s=buf.toString();
var arr=s.split("\n");
console.log(arr.length-1);


