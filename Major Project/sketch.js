// Moving Square
// Catherine Liu
// Feb 26, 2018

let blockColours = [[255, 0, 0], [0, 179, 0], [26, 26, 255], [255, 255, 0]];
let squareNumber = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);


}

function draw() {


  for (let i = width / 2 - 100; i < 700; i += 120) {
    for (let j = height / 2 - 100; j < 320; j += 120) {
      fill(blockColours[squareNumber][0], blockColours[squareNumber][1], blockColours[squareNumber][2]);
      rect(i, j, 100, 100);
      squareNumber += 1;
    }
  }
}
