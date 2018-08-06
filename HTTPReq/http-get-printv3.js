var https = require('https');

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


function printHTML (html) {
  console.log(html + 'process complete');
}

var requestOptions = {
  host: args[0],
  path: args[1]
};



getAndPrintHTML(requestOptions, printHTML);
