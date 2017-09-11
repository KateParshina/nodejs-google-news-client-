var req = require('./request.js');
var sulka = 'http://google-observer-1.herokuapp.com/api/event/list?kernelIdentifier=59822e1c5f0c8f1100bfd7ef';
var callback = function(error, obj)
{
    console.log(obj);
};
req(sulka, callback);