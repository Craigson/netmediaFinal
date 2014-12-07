var capture;
var img;
var camera;
var displayImage;

function setup(){
displayImage = false;
var myCanvas = createCanvas(320,240);
capture = createCapture(VIDEO);
capture.size(320,240);
myCanvas.parent('myContainer');
capture.hide();
    
button = createButton("Take Picture");
button.mousePressed(recordImage);
button.parent('captureButton');
    
retake = createButton("retake");
retake.mousePressed(retakePicture);
send = createButton("send");
send.mousePressed(sendImage);

}


function draw(){
if(displayImage == false){
    camera = image(capture,0,0,320,240);
    button.display();
    retake.hide();
    send.hide();
} else if (displayImage == true){
        image(img,0,0,320,240);
button.hide();
    retake.display();
    send.display();
    
    }
 //       console.log(displayImage);
}

    
function recordImage(){
    var displayCanvas = createCanvas(320,240);
    displayCanvas.parent('displayContainer');
    img = createImage(320,240);
    img.loadPixels();
    capture.loadPixels();
    //var resolution = 4*(camera.width * camera.height);
    for (var x = 0; x < width; x++){
        for (var y =0; y < height; y++){
            
      //      var loc = i + j*width;
            
        var r = pixels[y*width+x];
        var g = pixels[y*width+x+1];
        var b = pixels[y*width+x+2];
        var a = pixels[y*width+x+3];
            
            img.set(x,y, [r,g,b,a]);
            
        }
    }
    img.updatePixels();
    capture.updatePixels();
    displayImage == true;
}

function retakePicture(){
    displayImage == false;
}

function sendImage(){
//converts image data to string and sends via email
}