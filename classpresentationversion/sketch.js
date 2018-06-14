//WMCI Pathfinding Algorithm
//Catherine Liu & Csaba Nemeth
//CS30, Period 5, Mr. D. Schellenberg
//June 15, 2018

let translateX;

//Global Variables
let finishedPath;
let map1, map2, map3;
let nodeArray = [];
let hypArray = [];

let firstFloorPath, secondFloorPath, thirdFloorPath;

let otherRoomsStart, otherRoomsEnd;
let endRoomNumber, startRoomNumber, submitButton, refreshButon, text1, text2, text3, room;

let start = null;
let end = null;



//loads all of the maps used in background.
function preload() {
  map1 = loadImage("images/floor1.png");
  map2 = loadImage("images/floor2.png");
  map3 = loadImage("images/floor3.png");
}

function setup() {
  //makes the canvas a variable so that it behaves like an object and is easier to or shift.
  let cnv = createCanvas(800, 2000);
  translateX = (windowWidth - width) / 2;
  cnv.position(translateX, 0);

  //Input and drop down bar for UI.
  pickRoom();
  roomInput();
  refreshButton();

}

function draw() {

  //alligning maps.
  image(map1, 0, 300, map1.height/2.5, map1.width/2.5);
  image(map2, 0, map1.width/3 + 550, map2.height/1.7, map2.width/4.5);
  image(map3, width/2 - 250, map1.width/3 + map2.width/4.5 + 650, map3.height/0.7, map3.width/4.5);

  //Draw Menu and text
  screenText();
  displayAllMenu(20, 100);

  //Draws Path
  if (start !== null && end !== null) {
    finishedPath = createFullPath(start, end);
    drawFullPath(finishedPath);
  }
}

function screenText() {
  push();

  textStyle(BOLD);
  textSize(50);
  textAlign(CENTER);
  fill(0);

  text("Walter Murray Collegiate Institute", width/2, 50);

  textSize(25);
  text("First Floor", width/2 , 270);
  text("Second Floor", width/2 , 1150);
  text("Third Floor", width/2 , 1680);

  pop();

}

//Drawing Functions
function drawSinglePath(pathArray, nodeLocations) {
  for (let i = 0; i < pathArray.length - 1; i++) {
    push();
    stroke(63, 142, 193);
    strokeWeight(4);
    line(nodeLocations[pathArray[i]][0], nodeLocations[pathArray[i]][1], nodeLocations[pathArray[i+1]][0], nodeLocations[pathArray[i+1]][1]);
    pop();
  }
}
function drawFullPath(paths) {
  let startNodeRoute = paths.startNodeRoute;
  let endNodeRoute = paths.endNodeRoute;

  let startNodeMatrix = paths.startNodeMatrix;
  let endNodeMatrix = paths.endNodeMatrix;

  let numberOfFloors = paths.floors;

  if (numberOfFloors > 1) {
     drawSinglePath(startNodeRoute, startNodeMatrix);
     drawSinglePath(endNodeRoute, endNodeMatrix);
  }
  else {
    drawSinglePath(startNodeRoute, startNodeMatrix);
  }

  drawStartPosition();
  drawEndPosition();
}

function drawStartPosition() {
  let positions;
  push();
  noStroke();
  if (start[1] === 1) {
    positions = firstFloorLocations;
  }
  else if (start[1] === 2) {
    positions = secondFloorLocations;
  }
  else if (start[1] === 3) {
    positions = thirdFloorLocations;
  }
  fill(0, 0, 255);
  ellipse(positions[start[0]][0], positions[start[0]][1], 15, 15);
  fill(0, 0, 255, 100);
  ellipse(positions[start[0]][0], positions[start[0]][1], 40, 40);
  pop();
}
function drawEndPosition() {
  let positions;
  push();
  if (end[1] === 1) {
    positions = firstFloorLocations;
  }
  else if (end[1] === 2) {
    positions = secondFloorLocations;
  }
  else if (end[1] === 3) {
    positions = thirdFloorLocations;
  }
  noStroke();
  fill(0, 255, 0);
  ellipse(positions[end[0]][0], positions[end[0]][1], 15, 15);
  fill(0, 255, 0, 100);
  ellipse(positions[end[0]][0], positions[end[0]][1], 40, 40);
  pop();
}

//Pathfinding Algorithm
function shortestPath(matrix, startVertex) {

  //Creates three arrays with length equal to matrix
  let done = new Array(matrix.length);
  let pathLengths = new Array(matrix.length);
  let predecessors = new Array(matrix.length);

  done[startVertex] = true;
  //Loops through matrix[startVertex] and writes the values into the pathLengths array
  for (let i = 0; i < matrix.length; i++) {
    pathLengths[i] = matrix[startVertex][i];
    if (matrix[startVertex][i] !== Infinity) {
      predecessors[i] = startVertex;
    }
  }

  //Length from node to itself is 0;
  pathLengths[startVertex] = 0;
  for (let i = 0; i < matrix.length - 1; i++) {
    let closest = -1;
    let closestDistance = Infinity;
    for (let j = 0; j < matrix.length; j++) {
      if (!done[j] && pathLengths[j] < closestDistance) {
        closestDistance = pathLengths[j];
        closest = j;
      }
    }

    done[closest] = true;

    for (let j = 0; j < matrix.length; j++) {
      if (!done[j]) {
        let possiblyCloserDistance = pathLengths[closest] + matrix[closest][j];
        if (possiblyCloserDistance < pathLengths[j]) {
          pathLengths[j] = possiblyCloserDistance;
          predecessors[j] = closest;
        }
      }
    }
  }
  return { "startVertex": startVertex,
    "distances": pathLengths,
    "tree": predecessors };
}
function constructPath(object, endVertex) {
  let path = [];
  do {
    path.unshift(endVertex);
    endVertex = object.tree[endVertex];
  }
  while (endVertex !== object.startVertex);

  path.unshift(object.startVertex);
  return path;
}
function findPath(matrix, startNode, endNode) {
  return constructPath(shortestPath(matrix, startNode), endNode);
}

function createFullPath(startNode, endNode) { //startNode and endNode are arrays with [nodeNumber, floor] -> stairs are 0
  //Variables

  let floors;

  let startNodeRoute = null;
  let endNodeRoute = null;

  let startLocs = null;
  let endLocs = null;

  let matrix;
  let previousPath = Infinity;

  let startNodeRoutes = [];
  let endNodeRoutes = [];

  if (startNode[1] !== endNode[1]) { //Other Floor Path

    floors = 2;

    //startNode Routes
    if (startNode[1] === 1) {
      for (let item of firstFloorStairs) {
        startNodeRoutes.push(findPath(firstFloor, startNode[0], item));
        startLocs = firstFloorLocations;
      }
    }
    else if (startNode[1] === 2) {
      for (let item of secondFloorStairs) {
        startNodeRoutes.push(findPath(secondFloor, startNode[0], item));
        startLocs = secondFloorLocations;
      }
    }
    else if (startNode[1] === 3){
      for (let item of thirdFloorStairs) {
        startNodeRoutes.push(findPath(thirdFloor, startNode[0], item));
        startLocs = thirdFloorLocations;
      }
    }

    //endNode Routes
    if (endNode[1] === 1) {
      for (let item of firstFloorStairs) {
        endNodeRoutes.push(findPath(firstFloor, endNode[0], item));
        endLocs = firstFloorLocations;
      }
    }
    else if (endNode[1] === 2) {
      for (let item of secondFloorStairs) {
        endNodeRoutes.push(findPath(secondFloor, endNode[0], item));
        endLocs = secondFloorLocations;
      }
    }
    else if (endNode[1] === 3) {
      for (let item of thirdFloorStairs) {
        endNodeRoutes.push(findPath(thirdFloor, endNode[0], item));
        startNodeRoutes.splice(2, 3);
        endLocs = thirdFloorLocations;
      }
    }

    //Compare All Paths
    for (let i = 0; i < startNodeRoutes.length; i++) {
      if (startNodeRoutes[i].length + endNodeRoutes[i].length <= previousPath) {
        startNodeRoute = startNodeRoutes[i];
        endNodeRoute = endNodeRoutes[i];
        previousPath = startNodeRoutes[i].length + endNodeRoutes[i].length;
      }
    }
  }

  else { //Same Floor Path
    floors = 1;
    if (startNode[1] === 1) {
      matrix = firstFloor;
      startLocs = firstFloorLocations;
    }
    else if (startNode[1] === 2) {
      matrix = secondFloor;
      startLocs = secondFloorLocations;
    }
    else {
      matrix = thirdFloor;
      startLocs = thirdFloorLocations;
    }
    startNodeRoute = findPath(matrix, startNode[0], endNode[0]);

  }

  return {
    "floors": floors,
    "startNodeRoute": startNodeRoute,
    "endNodeRoute": endNodeRoute,
    "startNodeMatrix": startLocs,
    "endNodeMatrix": endLocs,
  }
}

//Finds the nearest node in the defined matrix according to the X and Y Position
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

//Not In Use
function displayNodes(array) {
  let count = -1;
  for (let item of array) {
    count += 1;
    push();
    strokeWeight(5);
    point(item[0], item[1]);
    fill(255, 0, 0);
    textSize(11);
    text(""+count+"",item[0],item[1]);
    pop();
  }
}


function startRoom() {
  let array;
  if (mouseIsPressed && mouseY > 295 && mouseX > 0 && mouseX < 700 && !clickedMousePosition) {
    if (mouseY < 1125) {
      array = firstFloorLocations;
      start = [nearestNode(array, [mouseX, mouseY]), 1];
      trueStartNode = array[start[0]];
    }
    else if (mouseY < 1640) {
      array = secondFloorLocations;
      start = [nearestNode(array, [mouseX, mouseY]), 2];
      trueStartNode = array[start[0]];
    }
    else if (mouseY > 1640) {
      array = thirdFloorLocations;
      start = [nearestNode(array, [mouseX, mouseY]), 3];
      trueStartNode = array[start[0]];
    }
    else {
      return
    }

    trueStartCoord = [mouseX, mouseY];
    mouseIsPressed = false;
    clickedMousePosition = true;
  }
}
