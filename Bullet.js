class Bullet {
  constructor(x, y, angle) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 5);
    this.vel.rotate(angle)
  }
  
  update() {
    this.pos.add(this.vel);
  }
  
  withinBounds() {
    let x = this.pos.x;
    let y = this.pos.y;
    
    if (x < 0 || x > width || y < 0 || y > height) {
      return false;
    } else {
      return true;
    }
  }
  
  hit(x, y, radius) {
    let d = dist(this.pos.x, this.pos.y, x, y);
    
    if (d <= radius) {
      return true;
    }
    
    return false;
  }
  
  render() {
    push();
    fill(255);
    noStroke();
    translate(this.pos.x, this.pos.y);
    circle(0, 0, 5);
    pop();
  }
}