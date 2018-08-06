var https  = require('https');

// var request = {
//   host: 'www.juliamarcello.com',
//   path: '/we-love-you-goodnight#5'
// };


function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };
  /* Add your code here */
  https.get(requestOptions, function (response) {

    // set encoding of received data to UTF-8
    response.setEncoding('utf8');

    // the callback is invoked when a `data` chunk is received
    response.on('data', function (data) {
     console.log('Chunk Received.', data);
     });

    response.on('end', function() {
      console.log('Response stream complete.');
    });
  });
}
getAndPrintHTMLChunks();