let game;

function setup() {
  const canvas = createCanvas(400, 600);
  canvas.style("margin", "2% auto 0% auto");
  
  game = new Game();
}

function draw() {
  game.showScreen();
}

function keyPressed() {
  switch (game.screen) {
    case "title":
      game.screen = "play";
      break;
    case "play":
      game.fire();
  }
}