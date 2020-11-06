// Teachable Machine
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/TeachableMachine/1-teachable-machine.html
// https://editor.p5js.org/codingtrain/sketches/PoZXqbu4v

// The video
let video;
// For displaying the label
let label = "waiting...";
// The classifier
let classifier;
let modelURL = 'https://teachablemachine.withgoogle.com/models/dAm-K5feC/';

let loveImg;
let loveFade = 0;

// STEP 1: Load the model!
function preload() {
  classifier = ml5.imageClassifier(modelURL + 'model.json');
  loveImg = loadImage("love.png");
}


function setup() {
  createCanvas(640, 520);
  // Create the video
  video = createCapture(VIDEO);
  video.size(640, 520);
  video.hide();
  // STEP 2: Start classifying
  classifyVideo();
}

// STEP 2 classify the videeo!
function classifyVideo() {
  classifier.classify(video, gotResults);
}

function draw() {
  background(0);
  tint(255);
  // Draw the video
  image(video, 0, 0);
  

  if (label === "Love") {
    loveFade = 255;
  }

  if (loveFade > 0) {
    tint(255, loveFade);
    image(loveImg, 0, 0);
    loveFade -= 10;
  }


  // STEP 4: Draw the label
/*   textSize(52);
  textAlign(CENTER, CENTER);
  fill(255);
  text(label, width / 2, height - 26); */


}

// STEP 3: Get the classification!
function gotResults(error, results) {
  // Something went wrong!
  if (error) {
    console.error(error);
    return;
  }
  // Store the label and classify again!
  label = results[0].label;
  classifyVideo();
}
