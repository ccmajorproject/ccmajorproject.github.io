//Catherine's CodingBat Challenge

//Write a function to take in an array with multiple x, y values and a coordinate:
// [[x, y],[x1, y1]...etc]:
//return the index of the coordinate nearest to the input coordinate

let array = [[1, 2,], [20,400,], [43,67,], [12,43,], [6,5,], [100,100,], [234,654,], [321,452,], [120,120,],];
let hypArray = [];
let smallestValue, position;

function setup() {
  createCanvas(500, 500);
}
function draw() {
  if (mouseIsPressed) {
    console.log(mouseX, mouseY);
    console.log(nearestNode(array, [mouseX, mouseY]));
    console.log(array[nearestNode(array, [mouseX, mouseY])]);
    mouseIsPressed = false;
  }
}

function nearestNode(array, coordinate) {
  for (let i = 0; i < array.length; i++) {
    let xDistance = abs(array[i][0] - coordinate[0]);
    let yDistance = abs(array[i][1] - coordinate[1]);
    let hyp = floor(sqrt(sq(xDistance) + sq(yDistance)));

    hypArray.push(hyp);
  }

  smallestValue = Math.min.apply(null, hypArray);
  position = hypArray.indexOf(smallestValue);
  hypArray = [];

  return position;
}
