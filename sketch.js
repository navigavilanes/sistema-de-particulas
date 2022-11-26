let nPelotas = 500;
let pelotas = []; 
let t = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < nPelotas; i++) {
    pelotas[i] = new RandomWalker(i);
  }
}

function draw() {
  background(100, 50);
  
  for (let i = 0; i < nPelotas; i++) {
    pelotas[i].update(t);
    pelotas[i].display();
  }
  t+= 0.001;
}

//__________classes_______
// _______random walker________
class RandomWalker {
  constructor(_nombre) {
    this.pink = random(255, 100);
    this.yellow = random(150, 150);
    this.red = random(200, 200);

    this.noiseShift = random(100)

    this.pos = createVector(width / 2, height / 2);
    this.speed = createVector(random(-1.5, 1.5), random(-1.5, 1.5));
    this.diametro = random(0, 25);
    print("Hola! soy la pelota" + this.nombre);
  }
  update(_t) {
    this.speed.rotate(map(noise(_t + this.noiseShift), 0, 1, -0.5, 0.5));
    this.pos.add(this.speed);
  }
  display() {
    stroke('rgba(0, 0, 0, 0.5)');
    strokeWeight(3);
    fill(this.pink, this.yellow, this.red); 
    ellipse(this.pos.x, this.pos.y, this.diametro);
 
  }
}

