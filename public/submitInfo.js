var recName
var recAddress
var senName
var personalInfo;
var thisInfo = '';
//var address = input.value();

var sendMail;

function setup(){
sendMail = document.getElementById('mail_button');
sendMail.addEventListener('click',submit);
}

function draw(){
    
}

function submit(){
senName = document.getElementById('sName').value;
recName = document.getElementById('rName').value;
recAddress = document.getElementById('rAddress').value;

    thisInfo += senName;
    thisInfo += ',';
    thisInfo += recName;
     thisInfo += ',';
    thisInfo += recAddress;
   
   
    
    
  

           console.log(thisInfo);
httpPost('/addRecipient',{personalInfo: thisInfo});

    window.location="thanks.html";
}

