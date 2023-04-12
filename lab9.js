let heartList = [];

let anotherHeartList= [];

function setup() {
  createCanvas(600, 600);
  heart1 = new Heart(50, 60, 10, "red");
  heart2 = new Heart(300, 400, 2,  "pink");

  for (let i = 0; i < 50; i++){
    let heart = new Heart (random(300), 200, 10, "red")
    anotherHeartList.push(heart);
  }
  
  
}

function draw() {
  background(220);
//   heart1.addHeart();
//   heart1.move();
//   heart2.addHeart();
//   heart2.move();
  
  anotherHeartList[0].move();
  anotherHeartList[0].addHeart();
  
  anotherHeartList[1].move();
  anotherHeartList[1].addHeart();
  
  anotherHeartList[2].move();
  anotherHeartList[2].addHeart();
  
  
  for (let i = 0; i < 50; i++){
    anotherHeartList[i].move();
    anotherHeartList[i].addHeart();
    

    
  }
  
}

class Heart {
  constructor(x, y, speedX, heartColor) {
    this.x = x;
    this.y = y;
    this.speedX = speedX;
    this.heartColor = heartColor;
  }
  
  move (){
    this.x = this.x + this.speedX;
  if (this.x > 550 || this.x < 0){
    this.speedX = this.speedX * -1;
  }
    
  }
  addHeart() {
    push();
    translate(this.x, this.y);
    fill("red");
    strokeWeight(0);
    scale(0.09);
    noStroke();
    ellipse(392, 305, 298, 305);
    ellipse(200, 305, 298, 305);

    translate(-9, 210);
    triangle(300, 500, 510, 200, 100, 200);
    pop();
  }
  
}

