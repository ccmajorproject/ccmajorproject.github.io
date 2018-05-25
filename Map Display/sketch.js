// Moving Square
// Catherine Liu
// Feb 26, 2018

let map1, map2, map3;
let transferArray = [];
let nodeArray = [];
let counter;


function preload(){
  map1 = loadImage("images/floor1.png");
  map2 = loadImage("images/floor2.png");
  map3 = loadImage("images/floor3.png");

}


function setup() {
  createCanvas(windowWidth, windowHeight);
  image(map1, 0, 0, map1.height/3.5, map1.width/3.5);
  image(map2, 0, 600, map2.height/1.5, map2.width/3.5);
  image(map3, 0, 1200, map3.height/0.7, map3.width/4.5);

  counter = 1;
}

function draw() {
  if (mouseIsPressed) {
    transferArray.push(counter, mouseX, mouseY); //counter is node number
    nodeArray.push(transferArray);
    counter += 1;
    fill(0);
    ellipse(mouseX, mouseY, 5, 5);
    transferArray = [];
    mouseIsPressed = false;
  }
}

// if (map2.width < map2.height) {
//   image(map2, 0, 0, map2.height/2.5, map2.width/2.5);
// }
// else {
//   image(map2, 0, 0, map2.width/2.5, map2.height/2.5);
// }
