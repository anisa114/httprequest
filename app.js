var request = require('request');
var fs = require('fs');


//Chaining Method



console.log('Downloading image...');

request.get('https://sytantris.github.io/http-examples/future.jpg')
        .on('error', function(error){
          throw err;
        })
        .on('response', function(response){
          console.log('Response Status Code: ', response.statusCode);
          console.log('Response Message: ', response.headers['content-type']);
        })
        .on('end', function() {
            console.log('Downloading complete');
        })

        .pipe(fs.createWriteStream('./future.jpg'));




