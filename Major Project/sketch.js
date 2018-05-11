// Moving Square
// Catherine Liu
// Feb 26, 2018

let check;
let currentLocation;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  check = geoCheck();
  currentLocation = getCurrentPosition();
}
