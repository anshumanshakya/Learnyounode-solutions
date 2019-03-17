var net = require('net')  
     
     function add0(i){
     	if(i<10){
     		i='0'+i;
     	}
     	return i;
     }
	
	var server = net.createServer(function (socket) {  
       // socket handling logic
       var s="";
       var date = new Date();
       s+=date.getFullYear()+"-";
       s+=add0(date.getMonth()+1)+"-";
       s+=add0(date.getDate())+" ";
       s+=add0(date.getHours())+":";
       s+=add0(date.getMinutes())+"\n";
       socket.write(s);
       socket.end();

     })  
     server.listen(process.argv[2]);  
