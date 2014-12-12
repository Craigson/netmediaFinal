var capture;
var img;
var camera;
var displayImage;
var pixelArray = [];
var codedString;
var getAddress;
var intValues = '';
var img;

var myVar;
var instructs;
var sendButton;

function setup(){
    
  myVar  = document.getElementById('encrypt_button');
    sendButton = document.getElementById('send_button');
  
    
    
devicePixelScaling(false);
displayImage = false;
var myCanvas = createCanvas(320,240);
capture = createCapture(VIDEO);
capture.size(320,240);
myCanvas.parent('myContainer');
capture.hide();


    
myVar.addEventListener('click',recordImage);
    sendButton.addEventListener('click',sendImage);
   // sendButton.style.display = 'none';
    
/*
button = createButton("ENCRYPT IMAGE");
button.mousePressed(recordImage);
button.parent('captureButton');
*/

}


function draw(){
if(displayImage == false){
    camera = image(capture,0,0,320,240);

} else if (displayImage == true){
   //     image(img,0,0,160,120);
    }

}

    
function recordImage(){
    
    
    var displayCanvas = createCanvas(320,240);
    displayCanvas.position(0,100);
    displayCanvas.parent('displayContainer');
    img = createImage(320,240);
    img.loadPixels();
    capture.loadPixels();
    
 for (var i = 0; i < 4*(capture.width*capture.height); i+=4){
        var r = capture.pixels[i];
        var g = capture.pixels[i+1];
        var b = capture.pixels[i+2];
        var a = capture.pixels[i+3];
            
     //img.set(x,y, [r,g,b,a]);
        
    pixelArray.push(r,g,b,a);
            }
    img.updatePixels();
    capture.updatePixels();
  //  displayImage = true;
    console.log(pixelArray.length);
    codedString = pixelArray.join();
    console.log(codedString.length);
    
    
    myVar.style.display = 'none';
    showButtons();

            }

function showButtons(){
 

}


function retakePicture(){
    displayImage = false;
    pixelArray.length = 0;
    
    //this function needs to hide the image
}

function sendImage(){
    console.log("this sends the image");
    httpPost('/retrieveIntegers',{rgbValues: codedString});
    window.location="recipient.html";
}

