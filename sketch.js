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

  function draw() {

    // Each light switching state
   if (millis() - yellowStartTime > 1000) { // Yellow light switches every 1 second
     isYellow = !isYellow;
     yellowStartTime = millis();
   }
   if (millis() - redStartTime > 500) { // Red light switches every 0.5 seconds
     isRed = !isRed;
     redStartTime = millis();
   }
   if (millis() - pinkStartTime > 1500) { // Pink light switches every 1.5 seconds
     isPink = !isPink;
     pinkStartTime = millis();
   }
 
 // Draw the different shapes of the lamps and adjust their positions
 drawCustomLamp(40, 250, isYellow ? color(255, 255, 0) : color(169, 169, 169), 'circle'); // circle light
 drawCustomLamp(650, 250, isPink ? color(255, 105, 180) : color(169, 169, 169), 'circle'); // cirle light
 drawCustomLamp(350, 250, isRed ? color(255, 0, 0) : color(169, 169, 169), 'square'); // square light
 drawCustomLamp(300, 550, isRed ? color(255, 0, 0) : color(169, 169, 169), 'square'); // square light
 drawCustomLamp(500, 730, isPink ? color(255, 105, 180) : color(169, 169, 169), 'oval'); // oval light
 
 }
 
 // Generic function: draws lights, supports different shapes.
 function drawCustomLamp(x, y, lampColor, shape) {
   // Shape and position of the bulb
   fill(lampColor);
   if (shape === 'circle') {
     ellipse(x, y - 50, 60, 60); // circle， Directly Above Base
   } else if (shape === 'square') {
     rect(x - 30, y - 80, 60, 60); //  square,Directly Above Base
 
   } else if (shape === 'oval') {
     ellipse(x, y - 40, 80, 40); // oval, Directly Above Base
   }
 
    // Lamp holder section, stays linked to the bulb
   fill(150);
   rect(x - 25, y, 50, 20); // Base
   rect(x - 5, y - 20, 10, 20); // Connection of the base to the bulb
 
    // Drawing a light bulb
   drawLamp(480, 539);
 }
 
   // Drawing a light bulb
 function drawLamp(x, y) {
   // Lamp color change
   if (isYellow) {
     fill(255, 255, 0); // yellow 
   } else {
     fill(169, 169, 169); // gray
   }
   ellipse(x, y - 30, 60, 80); // circle part of the bulb
 
 
   // Lamp holders
   fill(150); // gray
   rect(x - 25, y + 10, 50, 20); //Rectangular part of the lamp base
 
   stroke(0); // black
   strokeWeight(1);
 
 
   // Horizontal conveyor belt, the third row
   fill(grey);
   rect(0, 300, 900, 90);
 
   // Two parcel storage doors
   fill(darkgery);
     rect(90, 300, 30, 90);
     rect(210, 300, 30, 90);
     rect(720, 300, 30, 90);
     rect(840, 300, 30, 90);
 
   // Left parcel passageway
   fill(grey);
   rect(120, 0, 90, 900);
 
   // Building Columns
   fill(darkgery);
   rect(370, 300, 50, 90);
   rect(560, 300, 50, 90);
 
   // Package Movement
   push();
   translate(0, leftY);
   leftY -= 1;
   if (leftY < -900) {
     leftY = 900;
   }
   // Left package machines
   fill(darkgery);
   rect(120, 240, 90, 20);
   rect(120, 490, 90, 20);
   rect(120, 820, 90, 20);
 
   // Package colors
   fill(240, 210, 10);
   // Package 1
   rect(130, 175, 75, 65);
   rect(170, 140, 40, 35);
   // Package 2
   rect(120, 400, 87, 90);
   // Package 3
   rect(125, 750, 80, 70);
 
   // Package label
   fill(250, 250, 240);
   rect(170, 185, 30, 22); // 1
   rect(192, 145, 14, 10); // 1
   rect(135, 445, 40, 30); // 2
   rect(165, 760, 36, 26); // 3
 
   // MOvement
   pop();
 
   // Package 4 inside horizontal conveyor belt
   fill(240, 210, 10);
   rect(380, 310, 110, 80);
   fill(250, 250, 240);
   rect(410, 330, 40, 26); // 4
   // Tape on the second package
   fill(221, 195, 140);
   //rect(182, 400, 18, 90);
 
   // Right elevator passageway
   fill(grey);
   rect(750, 0, 90, 900);
 
   // Conveyor belt behind the elevator on the right
   fill(173, 173, 170);
   rect(785, 0, 20, 900);
 
   // Elevator control box
   fill(173, 173, 170);
   rect(760, 150, 70, 70);
   fill(68, 104, 178);
   rect(780, 170, 30, 30);
 
   // Elevator doors
   fill(68, 104, 178);
   rect(750, 775, 45, 125);
   rect(795, 775, 45, 125);
 
   fill(darkgery);
   rect(750, 540, 90, 20); // Elevator top
   rect(750, 700, 90, 20); // Elevator bottom
 
   fill(blue);
   rect(750, 560, 90, 140); // Elevator box
 
   rect(580, 520, 120, 50); //sofa
   rect(590, 500, 100, 40);
   fill(grey);
   rect(665, 512, 28, 28); //pillow
   rect(625, 520, 35, 20);
 
   //plant
   rect(650, 700, 40, 50); // flowerpot
 
   fill(yellow); // leaf
   rect(630, 680, 15, 15);
   rect(650, 660, 15, 15);
   fill(blue);
   rect(660, 680, 15, 15);
   fill(red);
   rect(680, 665, 15, 15);
 
   line(650, 700, 640, 690); //branch
   line(658, 700, 655, 670);
   line(670, 700, 670, 690);
   line(682, 700, 686, 675);
 
   //artwork
   fill(darkgery);
   rect(300, 630, 38, 48); // frame
   fill(grey);
   rect(304, 635, 30, 38); //canvas
   fill(yellow);
   rect(310, 640, 24, 25); //content
   fill(blue);
   rect(317, 635, 17, 15);
   fill(red);
   rect(304, 653, 12, 3);
 
   //table
   fill(yellow);
   rect(480, 225, 110, 10); //surface
   rect(490, 235, 10, 35); //leg right
   rect(570, 235, 10, 35); //leg left
 
   //chair
   rect(465, 245, 20, 25);
   rect(567, 245, 20, 25);
 
   //apple
   fill(red);
   rect(560, 212, 13, 13);
   line(565, 215, 565, 205);
   fill(blue);
   rect(565, 200, 5, 5);
 
   //package door
   fill(darkgery);
   rect(233, 155, 7, 105); //package door level4
   rect(233, 455, 7, 105); //package door level3
   rect(233, 635, 7, 105); //package door level2
 
   
 }