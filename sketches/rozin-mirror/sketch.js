let w = 420;
let h = 280;
let capture;

function setup() {
  let canvas = createCanvas(w, h);
  canvas.parent("#sketch-parent");
  capture = createCapture(VIDEO);
  capture.size(w, h);
  capture.hide();

  rectMode(CENTER);

}

function draw() {
  background(220, 180, 250);
  //load pixel data into capture object.
  capture.loadPixels();

  const stepSizeX = 10;
  const stepSizeY = 10;
  for (let y = 0; y < height; y += stepSizeY) {
    for (let x = 0; x < width; x += stepSizeX) {
      //fill(random(255),random(255),random(255));
      const i = y * width + x;
      const darknessR = (100 - capture.pixels[i * 4]) / 255;
      let radiusRX = stepSizeX * darknessR;
      radiusRX = constrain(radiusRX, 8, 16);
      let radiusRY = stepSizeY * darknessR;
      radiusRY = constrain(radiusRY, 8, 16);

      push();
      translate(capture.width - 10, 10);
      scale(-1, 1);


      push();
      translate(x, y);
      rotate((darknessR));
  
      let grey = 230-(darknessR * 255);
      fill(grey);


      rect(x/8, y/8, 12, 12);

      pop();

      pop();
    }
  }

}