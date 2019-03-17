var fs = require('fs');

var path = require('path');

module.exports = function (directory, extension, callback) {
fs.readdir(directory,function callback2 (err, flist) {
	if (err) {
        return callback(err);
    } 
	var str="."+extension;
	
	var filteredfiles = flist.filter((file)=>{
		return path.extname(file) ===str;
	});
		callback(null, filteredfiles);
	});
}  
