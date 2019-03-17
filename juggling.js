var http = require('http');

var arr = initArr(3);
var count = 0;

for (var i = 0; i < 3; ++i) {

		httpget(i);
  
}

function httpget(n) {
        http.get(process.argv[n+2], function(response) {

            response.on('data', function(data) {
                arr[n] += data.toString();
            });

            response.on('end', function() {
                // One more full request has completed.
                count += 1;

                if (count === 3) {
                    printAll(arr);
                }
            });
        });
    }

function initArr(numItems) {

    var arr = [];

    for (var i = 0; i < numItems; ++i) {
        arr[i] = '';
    }

    return arr;
}

function printAll(arr) {
    for (var i = 0, len = arr.length; i < len; ++i) {
        console.log(arr[i]);
    }
}