var recName
var recAddress
var senName
var personalInfo;
var thisInfo;
//var address = input.value();


function submit(){
recName = document.getElementById('rName').value;
recAddress = document.getElementById('rAddress').value;
senName = document.getElementById('sName').value;
  
     thisInfo = {
        receiverName: recName,
        receiverAddress: recAddress,
        senderName: senName
    };
           
httpPost('/addRecipient',{personalInfo: thisInfo});
console.log(personalInfo);
}

