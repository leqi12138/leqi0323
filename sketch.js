class Pattern {
    constructor(side, colors) {
      this.side = side;
      this.colors = colors;
    }
  
    drawRect(x, y) {
      let randomColor = random(this.colors);
      fill(randomColor);
      rect(x, y, this.side, this.side);
    }
  
    drawVerticalPattern(xPositions, yPositions) {
      for (let i = 0; i < yPositions.length; i++) {
        let y = yPositions[i];
        for (let x = 0; x < width; x += this.side) {
          this.drawRect(x, y - this.side / 2);
        }
      }
    }
  
    drawHorizontalPattern(xPositions, yPositions) {
      for (let i = 0; i < xPositions.length; i++) {
        let x = xPositions[i];
        for (let y = 0; y < height; y += this.side) {
          this.drawRect(x - this.side / 2, y);
        }
      }
    }
  }
  
  let leftY = 0;
  let grey;
  let darkgery;
  let yellow;
  let blue;
  let red;
  let side;
  
  let isYellow = true;
  let isRed = true;
  let isPink = true;
  
  let startTime;
  
  // Initialize the switching time of the lights
  let yellowStartTime, redStartTime, pinkStartTime;

  function setup() {
    createCanvas(900, 900);
    strokeWeight(1.5);
    background(100,100,100);
    side = 30;
  
    yellow = color(236, 212, 42);
    blue = color(68, 104, 178);
    grey = color(217, 218, 212);
    red = color(165, 57, 45);
    darkgery = color(114, 113, 113);
  
    let colors = [yellow, blue, grey, red];
  
    let yPositions = [105, 285, 405, 585, 765];
    let xPositions = [105, 225, 735, 855];
  
    let pattern = new Pattern(side, colors);
  
    pattern.drawVerticalPattern(xPositions, yPositions);
    pattern.drawHorizontalPattern(xPositions, yPositions);
  
    noStroke();
  
    yellowStartTime = millis();
    redStartTime = millis();
    pinkStartTime = millis();
  }