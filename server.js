var servi = require('servi');
var app = new servi(true);
var fs = require('fs');
port(3007);

serveFiles("public");

route('/', showIndex);
//route('encodeString

function showIndex(){
    request.serveFile('index.html');

}

function encodeString(){
    fs.writeFile('/data/words.txt',codedString,function (err){
        if(err) throw err;
        console.log('it\'s saved in this location');
                    });
}

start();