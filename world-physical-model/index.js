let ground;
let sprite;
let canvas;

function setup() {
  canvas = createCanvas(720, 400);

  ground = new Ground(30);
  sprite = new Sprite(360, 50, 5);
}

function draw() { 
  background(color(80,100,200));     
  ground.render();   
  
  let gravity = new Vector(0,3);
  //let wind = new Vector(0.2,0);

  sprite.applyForce(gravity);
  //sprite.applyForce(wind);
  sprite.update(); 
  sprite.render();
  sprite.checkEdges();
}

// sprite class
class Sprite {
  constructor(x, y, mass) {
      this.pos = new Vector(x, y);
      this.mass = mass;
      this.size = mass*8;
      this.vel = new Vector(0,0);
      this.acc = new Vector(0,0);
  }

  render() {
      noStroke();
      fill(color(255,0,0));
      rect(this.pos.x, this.pos.y, this.size, this.size);
  }

  update() {
      this.vel = Vector.Add(this.vel, this.acc);
      this.pos = Vector.Add(this.pos, this.vel); 
      this.acc = new Vector(0,0);
  }

  applyForce(force) {
      var f = Vector.Div(force, this.mass);
      this.acc = Vector.Add(this.acc, f);
  }

  checkEdges() {
      //bottom 
      if (this.pos.y > ground.pos.y - this.size) {
        this.vel.y = this.vel.y * (-0.7);
        this.pos.y = ground.pos.y - this.size;
      }
  }
}

// ground class
class Ground {
  constructor(size) {
      this.size = size;
      this.pos = new Vector(0, canvas.height - this.size)
  }

  // Custom method for updating the variables
  render() {
      noStroke();
      fill(color(50,200,100));
      rect(this.pos.x, this.pos.y, canvas.width, this.size);
  }
}