function setup() {
    createCanvas(600, 600);
     background("white");
  }
  
  function draw() {
    
    stroke("darkblue");
    fill("darkblue");
    
    // console.log(mouseIsPressed);
    
    if (mouseIsPressed) { 
      square(mouseX, mouseY, 20, 35);
  } 
  }