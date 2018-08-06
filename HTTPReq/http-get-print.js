var https = require('https');
function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };
  var receivedString = '';
   https.get(requestOptions, function (response) {
    // set encoding of received data to UTF-8
    response.setEncoding('utf8');
    // the callback is invoked when a `data` chunk is received
    response.on('data', function (data) {
     receivedString += data;
    });
    response.on('end', function(){
      console.log(receivedString);
    });
  });

}

getAndPrintHTML();