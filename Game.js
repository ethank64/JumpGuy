class Game {
  constructor() {
    this.screen = "title";
    this.score = 0;
    this.launchers = [new Launcher(width / 2, height - 100), new Launcher(width / 2, height / 2 + 100)];
    this.bullet = null;
  }
  
  fire() {
    if (this.bullet) return;
    
    let x = this.launchers[0].pos.x;
    let y = this.launchers[0].pos.y;
    let r = this.launchers[0].angle;
    
    this.bullet = new Bullet(x, y, r);
  }
  
  showScreen() {
    switch (this.screen) {
      case "title":
        this.titleScreen();
        break;
      case "play":
        this.playScreen();
        break;
      default:
        console.error("Invalid screen value in Game object.");
    }
  }
  
  titleScreen() {
    background(0);
    
    // DRAW TITLE \\
    push();
    textAlign(CENTER);
    textSize(52);
    fill(255);
    text("Jump Guy", width / 2, height / 2);
    pop();
    
    // DRAW SUBTITLE \\
    push();
    textAlign(CENTER);
    textStyle(ITALIC);
    textSize(16);
    fill(180);
    text("Press any key to play", width / 2, height / 2 + 50);
    pop();
  }
  
  update() {
    // CHECK FOR LAUNCHER COLLISION \\
    if (this.bullet) {
      for (let i = 1; i < this.launchers.length; i++) {
        let x = this.launchers[i].pos.x;
        let y = this.launchers[i].pos.y;
        let radius = this.launchers[i].radius;

        if (this.bullet.hit(x, y, radius)) {
          this.launchers.shift();
          this.score++;
          this.bullet = null;
        }
      }
    }
    
    // ONLY THE ACTIVE LAUNCHER SPINS \\
    this.launchers[0].update();
  }
  
  playScreen() {
    this.update();
    
    background(0);
    
    // DRAW LAUNCHER BODY \\
    this.launchers.forEach(launcher => {
      launcher.render();
    });
    
    // DRAW BULLET \\
    if (this.bullet) {
      this.bullet.update();
      this.bullet.render();
      
      if (!this.bullet.withinBounds()) {
        this.bullet = null;
      }
    }
    
    // DRAW SCORE \\
    push();
    textAlign(CENTER);
    textSize(40);
    fill(255);
    text(this.score, width / 2, 100);
    pop();
  }
}