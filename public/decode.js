var newString = [];
var img; 
var displayImage;

function setup(){
    displayImage = false;    
  document.getElementById('fileinput').addEventListener('change', readSingleFile, false);
    console.log("a word");
}

function draw(){
if (displayImage == true){
        image(img,0,0,160,120);
}
}

function readSingleFile(evt) {
    //Retrieve the first (and only!) File from the FileList object
    var f = evt.target.files[0]; 

    if (f) {
      var r = new FileReader();
      r.onload = function(e) { 
	      var contents = e.target.result;
//        alert( "Got the file.n" 
//              +"name: " + f.name + "n"
//              +"type: " + f.type + "n"
//              +"size: " + f.size + " bytesn"
//              + "starts with: " + contents
//             );
          newString = contents.split(',');
          
          newCanvas = createCanvas(160,120);
         
    newCanvas.parent('decodeCanvas');
    img = createImage(160,120);
    img.loadPixels();
    for (var x = 0; x < width; x++){
        for (var y = 0; y < height; y++){
            
        var r = newString[(y*width+x)*4];
        var g = newString[((y*width+x)*4)+1];
        var b = newString[((y*width+x)*4)+2];
        var a = newString[((y*width+x)*4)+3];
            
            
     img.set(x,y, [r,g,b,a]);
            }
    }
    img.updatePixels();
    displayImage = true;
    
      }
      r.readAsText(f);
 
    } else { 
      alert("Failed to load file");
    }
  }

