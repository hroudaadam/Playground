const width = 600;
const height = 600;
let angle = 0;
let angleV = 0.01;
let angleA = 0.00001;
const radius = 150;


function setup() {
    createCanvas(width, height);
    background(color(0, 0, 0));
}

function draw() {
    background(color(0, 0, 0, 25));

    noStroke();
    let center = createVector(height / 2, width / 2);
    fill(255);
    ellipse(center.x, center.y, 5);
    
    angleV+=angleA;
    angle+=angleV;

    let x = center.x + (sin(angle) * radius);
    let y = center.y + (cos(angle) * radius);
    ellipse(x, y, 35);
}



