var capture;

function setup(){
var myCanvas = createCanvas(320,240);
capture = createCapture(VIDEO);
capture.size(320,240);
myCanvas.parent('myContainer');
capture.hide();

}
function draw(){
image(capture,0,0,320,240);

}
    

