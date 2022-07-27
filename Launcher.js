class Launcher {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.angle = round(random(360));
    this.rotationSpeed = 3;
    this.radius = 15;
  }
  
  update() {
    this.angle += this.rotationSpeed;
  }
  
  render() {
    // DRAW LAUNCHER BODY \\
    push();
    noFill();
    stroke(255);
    strokeWeight(2);
    translate(this.pos.x, this.pos.y);
    ellipseMode(RADIUS);
    circle(0, 0, this.radius);
    
    // DRAW ROTATOR \\
    angleMode(DEGREES);
    rotate(this.angle);
    line(0, 0, 0, this.radius);
    pop();
  }
}