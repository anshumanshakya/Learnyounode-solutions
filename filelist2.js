

var mymodule = require('./firstmodule.js');

var directory=process.argv[2];

var extension = process.argv[3];

    mymodule(directory, extension, (err, files)=>{
    	if(err) {
        console.error(err);
        return;
    	}

    	files.forEach((file)=>{
    		console.log(file);
    	});
    });
	
	
	//console.log(list);