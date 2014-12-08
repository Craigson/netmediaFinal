var capture;
var img;
var camera;
var displayImage;
var pixelArray = [];
var codedString;
var getAddress;
var intValues = '';
var img;


function setup(){
displayImage = false;
var myCanvas = createCanvas(160,120);
capture = createCapture(VIDEO);
capture.size(160,120);
myCanvas.parent('myContainer');
capture.hide();
    
button = createButton("Take Picture");
button.mousePressed(recordImage);
button.parent('captureButton');

}


function draw(){
if(displayImage == false){
    camera = image(capture,0,0,160,120);

} else if (displayImage == true){
   //     image(img,0,0,160,120);

    
    }

}

    
function recordImage(){
    var displayCanvas = createCanvas(160,120);
    displayCanvas.parent('displayContainer');
    img = createImage(160,120);
    img.loadPixels();
    capture.loadPixels();
    for (var x = 0; x < width; x++){
        for (var y = 0; y < height; y++){
            
        var r = capture.pixels[(y*width+x)*4];
        var g = capture.pixels[((y*width+x)*4)+3];
        var b = capture.pixels[((y*width+x)*4)+3];
        var a = capture.pixels[((y*width+x)*4)+3];
            
     img.set(x,y, [r,g,b,a]);
        
    pixelArray.push(r,g,b,a);
            }
    }
    img.updatePixels();
    capture.updatePixels();
  //  displayImage = true;
    console.log(pixelArray.length);
    codedString = pixelArray.join();
    console.log(codedString.length);
    
    showButtons();
            }


function retakePicture(){
    displayImage = false;
    pixelArray.length = 0;
    //this function needs to hide the image
}

function sendImage(){
    httpPost('/retrieveIntegers',{rgbValues: codedString});
    console.log("this sends the image");
    window.location="recipient.html";
}

function showButtons(){
    retake = createButton("retake");
retake.mousePressed(retakePicture);
    
send = createButton("send");
send.parent('sendButton');
send.mousePressed(sendImage);
}