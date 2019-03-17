var fs = require('fs');

fs.readdir(process.argv[2],function callback (err, list) {
	if (err) {
        throw err;
    }
    var str="."+process.argv[3];
	//console.log(list);
	for(var i=0; i<list.length;i++){
		if(list[i].lastIndexOf(str)!=-1){
		console.log(list[i]);
	}
	}
});