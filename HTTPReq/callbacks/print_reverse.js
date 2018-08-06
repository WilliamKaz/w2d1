var reverse = function(html){
  var text  = html.toString();
  console.log(text.split(' ').reverse().join('') + ': String is reversed.');
}


module.exports = reverse;