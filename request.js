var request = require('request');
var sobirashka = function(sulka, callback)
{
    request(sulka, function (error, response, body) 
    {
        var obj = JSON.parse(body);
        callback(error, obj);
    });
}
module.exports = sobirashka;
    
    
