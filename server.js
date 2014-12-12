var servi = require('servi');
var app = new servi(true);
var fs = require('fs');
var newArray = [];
var nodemailer = require('nodemailer');
var mailText = [];

port(3008);


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
route('/showAbout', showAbout);
route('/showSend', showSend);
route('/showReceive', showReceive);
route('/retrieveIntegers', getRGBAdata);
route('/addRecipient', getRecipientDetails);
route('/saveData', writeFile);
//route('sayThanks', thanks);


function showIndex(){
    request.serveFile('index.html');
}

function showSend(request){
    request.serveFile('public/send.html');
}

function showReceive(request){
request.serveFile('public/receive.html');
}

function showAbout(request){
    request.serveFile('public/about.html');
}

/*
funciton thanks(){
    request.serveFile('public/thanks.html');
}
*/

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

        fs.writeFile('public/data/encodedWords.txt',yourdata,function (err){
        if(err) {
            throw err;
    }
        console.log('it\'s saved in this location');
                    });
    
    console.log("writing new file");
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
    
    
    //read the encodedWords.txt file in order to add it as an attachment
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
    
    text: "Hi " + receiver + ",\n \n You've received an encoded message from " + sender + ".  \n \n Follow the link http://localhost:3008/showReceive and follow the instructions to decypher the message!",
    

    attachments: [
        {
        filename: 'encodedWords.txt',
        content: data,

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

}


start();