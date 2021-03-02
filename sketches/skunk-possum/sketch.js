let capture;
let poseNet;
let pose;
let possum;
let skunk;

function preload() {
  // load images here
  possum = loadImage('possum.png');
  skunk = loadImage('skunk.png');
}

function setup() {
  let c = createCanvas(640, 480);
  c.parent("#sketch-partn");
  capture = createCapture(VIDEO);
  capture.hide();
  poseNet = ml5.poseNet(capture, modelLoaded);
  poseNet.on('pose', gotPoses);
  
}

function gotPoses(poses) {
  if (poses.length > 0){
    pose = poses[0].pose;
  }
}

function modelLoaded() {
   }

function draw() {
  background(220);
  push();
    translate(width, 0);
    scale(-1, 1);
    image(capture, 0, 0);


    if (pose){
      push();
      imageMode(CENTER);
      image(possum, pose.rightWrist.x, pose.rightWrist.y-80, possum.width/3, possum.height/3);
      image(skunk, pose.leftWrist.x, pose.leftWrist.y-80, skunk.width/3, skunk.height/3);
      pop();
    }
  pop();
}