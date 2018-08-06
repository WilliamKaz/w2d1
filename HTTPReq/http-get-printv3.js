var https = require('https');

var mod = require('./module');
var rev = require('./callbacks/print_reverse');
var up = require('./callbacks/print_Uppercase');
var low = require('./callbacks/print_Lowercase');

var args = process.argv.slice(2);

function getAndPrintHTML (options, callback) {
  var receivedString = '';
  https.get(options, function (response) {
    // set encoding of received data to UTF-8
    response.setEncoding('utf8');
    // the callback is invoked when a `data` chunk is received
    response.on('data', function (data) {
      receivedString += data;
       callback(receivedString);
    });
  });

}




var requestOptions = {
  host: args[0],
  path: args[1]
};



getAndPrintHTML(requestOptions, mod);
getAndPrintHTML(requestOptions, up);
getAndPrintHTML(requestOptions, low);
getAndPrintHTML(requestOptions, rev)  ;

