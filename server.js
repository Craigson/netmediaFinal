var servi = require('servi');
var app = new servi(true);
var fs = require('fs');
var newArray = [];
var nodemailer = require('nodemailer');
var mailText = [];

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



function getRecipientDetails(request){
    
var theirdata = request.fields.personalInfo;
    var details = theirdata.split(',');
    var sender = details[0];
    var receiver = details[1];
    var address = details[2];
    
    console.log(sender);
    console.log(receiver);
    console.log(address);
    
    
        fs.readFile('public/data/encodedWords.txt','utf8', encodedData);
function encodedData(err,data){
    if (err){
        throw err;
    }
  console.log("alls well");

var message = {
    from: sender,
    
    to: address,
    
    subject: "You've received a coded message!",
    
    text: "test",
    

    attachments: [
        {
        filename: 'encodedWords.txt',
        //get the content from encodedValues
       content: data,
     //  filepath: "public/data/encodedWords.txt"     
           // contentType: 'text/plain'
        }
    ]
}

        transporter.sendMail(message, function(error, info){
    if(error){
        console.log('error occurred');
        console.log(error.message);
        return;
    }
       console.log('message sent successfully');
    console.log('server responded with "%s"', info.response);
});
//console.log(myname);
};
}

    


//save the encoded words to a text file for e-mailing
function writeFile(){
    fs.writeFile('public/data/encodedWords.txt',yourdata,function (err){
        if(err) throw err;
        console.log('it\'s saved in this location');
                    });
}





start();