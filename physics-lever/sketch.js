// Teachable Machine
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/TeachableMachine/1-teachable-machine.html
// https://editor.p5js.org/codingtrain/sketches/PoZXqbu4v

const ww = 900;
const wh = 500;
const clickChng = 5;

var f1=10;
var f2=10;
var a1=90;
var a2=90;
var f1X=()=> {return map(a1, 10, 90, 430, 180); };
var f1L=()=> {return map(f1, 10, 90, 50, 250); };
var f2X=()=> {return map(a2, 10, 90, 470, 720); };
var f2L=()=> {return map(f2, 10, 90, 50, 250); };


// F1=10N => cca x=180
// F1=90N => cca x=430

// A1=90m => cca x=


function setup() {
  let myCanvas = createCanvas(ww, wh);
  myCanvas.parent('p5js');


  f1Plus = createButton('+');
  f1Plus.position(170, 28);
  f1Plus.mousePressed(() => {updateF1(false)});

  f1Minus = createButton('–');
  f1Minus.position(205, 28);
  f1Minus.mousePressed(() => {updateF1(true)});

  f2Plus = createButton('+');
  f2Plus.position(795, 28);
  f2Plus.mousePressed(() => {updateF2(false)});

  f2Minus = createButton('–');
  f2Minus.position(830, 28);
  f2Minus.mousePressed(() => {updateF2(true)});

  a1Plus = createButton('+');
  a1Plus.position(170, 58);
  a1Plus.mousePressed(() => {updateA1(false)});

  a1Minus = createButton('–');
  a1Minus.position(205, 58);
  a1Minus.mousePressed(() => {updateA1(true)});

  a2Plus = createButton('+');
  a2Plus.position(795, 58);
  a2Plus.mousePressed(() => {updateA2(false)});

  a2Minus = createButton('–');
  a2Minus.position(830, 58);
  a2Minus.mousePressed(() => {updateA2(true)});
}

function draw() {
  // console.log(f1X);

  background(color("lightgreen"));
  drawLabel("F1 = " + f1.toFixed(2) + "N", 25, 50, color("red"));
  drawLabel("F2 = " + f2.toFixed(2) + "N", 650, 50, color("blue"));
  drawLabel("L1 = " + a1.toFixed(2) + "m", 25, 80, color("orange"));
  drawLabel("L2 = " + a2.toFixed(2) + "m", 650, 80, color("blueviolet"));

1
  drawLabel("Adam Hrouda © 2021", 690, 480, color("black"), 18);


  fill(color("black"));
  noStroke();
  rectMode(CENTER);
  rect(ww/2, wh/2 + 120, 600, 15);
  fill(color("black"))
  ellipse(ww/2, wh/2 + 150, 50);

  // drawArrow(createVector(50, 50), createVector(0, 100), 0);
  var f1Arr = new Arrow(f1X(), 330, f1L(), color("red"));
  f1Arr.draw();
  var f2Arr = new Arrow(f2X(), 330, f2L(), color("blue"));
  f2Arr.draw();

  stroke(color("orange"));
  strokeWeight(3);
  fill(color("orange"));
  line(f1X(), wh/2 + 120, 450, wh/2 + 120);

  stroke(color("blueviolet"));
  strokeWeight(3);
  fill(color("blueviolet"));
  line(f2X(), wh/2 + 120, 450, wh/2 + 120);
}

function drawLabel(string, x, y, c, s=24) {
  noStroke();
  textSize(s);
  fill(c);
  text(string, x, y);
}

function updateA1(subtract) {
  var diff = a1%clickChng;
  a1-=diff;
  if (subtract) {
    if(a1 > 10) a1 = a1-clickChng
  }
  else {
    if(a1 < 90) a1 = a1+clickChng
  }
  f1 = (f2*a2) / a1;
}

function updateA2(subtract) {
  var diff = a2%clickChng;
  a2-=diff;
  if (subtract) {
    if(a2 > 10) a2 = a2-clickChng
  }
  else {
    if(a2 < 90) a2 = a2+clickChng
  }
  f2 = (f1*a1) / a2;
}

function updateF1(subtract) {
  var diff = f1%clickChng;
  f1-=diff;
  if (subtract) {
    if(f1 > 10) f1 = f1-clickChng
  }
  else {
    if(f1 < 90) f1 = f1+clickChng
  }
  a1 = (f2*a2) / f1;
}

function updateF2(subtract) {
  var diff = f2%clickChng;
  f2-=diff;
  if (subtract) {
    if(f2 > 10) f2 = f2-clickChng
  }
  else {
    if(f2 < 90) f2 = f2+clickChng
  }
  a2 = (f1*a1) / f2;
}

class Arrow {
  constructor(x, y, l, c) {
    this.x = x;
    this.y = y;
    this.l = l;
    this.c = c;
  }

  draw() {
    let arrowSize = 15;
    let hx = this.x;
    let hy = this.y + arrowSize;

    stroke(this.c);
    strokeWeight(5);
    fill(this.c);
    line(this.x, this.y, this.x, this.y - this.l);

    triangle(hx, hy, hx-(arrowSize/2), hy-arrowSize, hx+(arrowSize/2), hy-arrowSize);
  }
}
