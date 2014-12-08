var servi = require('servi');
var app = new servi(true);
var fs = require('fs');
//var mailer = require('nodemailer');

port(3007);


serveFiles("public");

fs.readFile('public/data/codeWords.txt','utf8', importData);

/*
//here's the nodemailer code

//create a smtp transporter object
var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'postvisualencryption@gmail.com',
        pass: 'netmedfinal1234'
    }
});

console.log('SMTP configured');

//msg object
var message = {
    from: 'Sender Name <sender@example.com>',
    
    to: '"Receiver Name" <receiver@example.com',
    
    subject: "Someone sent you a coded message!",
    
    text: 'This is a test message',
    
    attachments: [
        {
            filename: 'codedMessage.txt',
         //get the content from encodedValues
         content: fs.createReadStream('data/encodedValues.txt'),
            
            contentType: 'text/plain'
        }
    ]
};

console.log('Sending mail');

//this needs to be triggered by the send button
transporter.sendMail(message, function(error, info){
    if(error){
        console.log('error occurred');
        console.log(error.message);
        return;
    }
       console.log('message sent successfully');
    console.log('server responded with "%s"', info.response);
});

//end of mail
         
*/


route('/', showIndex);
route('/savedValues', getYourData);
route('/saveData', encodeString);

function showIndex(){
    request.serveFile('index.html');

}


function getYourData(request){
    var yourdata = request.fields.rgbValues;
    console.log(yourdata);
    request.respond("okay");
}



//need to get codedString from capture.js
function encodeString(){
    fs.writeFile('/data/words.txt',yourdata,function (err){
        if(err) throw err;
        console.log('it\'s saved in this location');
                    });
}


           
function importData(err,data){
    if (err){
        throw err;
    }
   var codeWords = data.split(",");
  //console.log(words.length);
  //  console.log(codeWords);
}


start();