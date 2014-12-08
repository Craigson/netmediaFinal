var servi = require('servi');
var app = new servi(true);
var fs = require('fs');
var newArray = [];
var nodemailer = require('nodemailer');

port(3007);


serveFiles("public");

fs.readFile('public/data/codeWords.txt','utf8', importData);


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

console.log('Sending mail');

/*
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

*/
//end of mail

route('/', showIndex);
route('/retrieveIntegers', getRGBAdata);
route('/addRecipient', getRecipientDetails);
route('/saveData', writeFile);


function showIndex(){
    request.serveFile('index.html');
}


function getRicipientDetails(request){
    
    var theirdata = request.fields.personalInfo;
    console.log(theirdata);
    
var message = {
    from: 'Sender Name <sender@example.com>',
    
    to: 'craigpick@gmail.com',
    
    subject: "Someone sent you a coded message!",
    
    text: 'This is a test message',
    
    attachments: [
        {
            filename: 'codedMessage.txt',
         //get the content from encodedValues
         content: fs.createReadStream('public/data/encodedWords.txt'),
            
            contentType: 'text/plain'
        }
    ]
};
//console.log(myname);
}

    
//import the file with 256 unique code code words
function importData(err,data){
    if (err){
        throw err;
    }
   var codeWords = data.split(",");
  //console.log(words.length);
  //  console.log(codeWords);
}

//retrieve RGBA values from image
function getRGBAdata(request){
    var yourdata = request.fields.rgbValues;
   // console.log(yourdata.split(','));
    
    
//writeFile();
    
    
                    
    
   // var newArray = yourdata.split(',');
  //  console.log(newArray.length);
    
}

//save the encoded words to a text file for e-mailing
function writeFile(){
    fs.writeFile('public/data/encodedWords.txt',yourdata,function (err){
        if(err) throw err;
        console.log('it\'s saved in this location');
                    });
}



function sendMail(){
    transporter.sendMail(message, function(error, info){
    if(error){
        console.log('error occurred');
        console.log(error.message);
        return;
    }
       console.log('message sent successfully');
    console.log('server responded with "%s"', info.response);
});
    
}




start();