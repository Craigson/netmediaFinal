var newString = [];
var img; 
var displayImage;

function setup(){
    devicePixelScaling(false);
    displayImage = false;    
  document.getElementById('fileinput').addEventListener('change', readSingleFile, false);
    console.log("a word");
}

function draw(){
if (displayImage == true){
        image(img,0,0,320,240);
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
          
          newCanvas = createCanvas(320,240);
         
    newCanvas.parent('decodeCanvas');
    img = createImage(320,240);
    img.loadPixels();

          for (var i = 0; i < newString.length; i+=4){
        img.pixels[i] = newString[i];
        img.pixels[i+1] = newString[i+1];
        img.pixels[i+2] = newString[i+2];
        img.pixels[i+3] = newString[i+3];
            
        
    }
    img.updatePixels();
    displayImage = true;
    
      }
      r.readAsText(f);
 
    } else { 
      alert("Failed to load file");
    }
  }

