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
  