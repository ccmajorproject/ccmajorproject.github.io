//WMCI Pathfinding Algorithm
//Catherine Liu & Csaba Nemeth
//CS30, Period 5, Mr. D. Schellenberg
//June 15, 2018

//Translation of the cnv variable -> Important for formatting;
let translateX;

//Images
let map1, map2, map3;

//Inputs
let otherRoomsStart, otherRoomsEnd, endRoomNumber, startRoomNumber, refreshButon;

//Path Variables
let finishedPath;
let hypArray = [];
let start = null;
let end = null;

//Washroom Detection Variables
let washroomLocations = [[367, 944], [633, 872], [357, 1501], [622, 1456], [235, 1813]];
let startCoords;
let closestWashroom;

//loads all of the maps used in background.
function preload() {
  map1 = loadImage("images/floor1.png");
  map2 = loadImage("images/floor2.png");
  map3 = loadImage("images/floor3.png");
}
function setup() {

  //Creates a variable canvas to allow for shift onscreen.
  let cnv = createCanvas(800, 2000);
  translateX = (windowWidth - width) / 2;
  cnv.position(translateX, 0);

  //Set up for inputs and buttons.
  roomInput();
  pickRoom();
  refreshButton();

}

//Draw Loop
function draw() {

  //Display all maps
  image(map1, 0, 300, map1.height/2.5, map1.width/2.5);
  image(map2, 0, map1.width/3 + 550, map2.height/1.7, map2.width/4.5);
  image(map3, width/2 - 250, map1.width/3 + map2.width/4.5 + 650, map3.height/0.7, map3.width/4.5);

  //Display Menu and Text
  screenText();
  displayAllMenu(20, 100);

  //If start and end nodes have not been defined, check for an input.
  if (start === null) {
    start = convertor(int(startRoomNumber.value()));
  }
  if (end === null) {
    end = convertor(int(endRoomNumber.value()));
  }

  //If both start and end have been defined, draw the complete path on the screen.
  if (start !== null && end !== null) {
    finishedPath = createFullPath(start, end);
    drawFullPath(finishedPath);
  }
}
//Displays text on the screen which isn't present in the menu;
function screenText() {
  push();

  textStyle(BOLD);
  textAlign(CENTER);
  fill(0);

  textSize(50);
  text("Walter Murray Collegiate Institute", width/2, 50);

  textSize(25);
  text("First Floor", width/2 , 280);
  text("Second Floor", width/2 , 1150);
  text("Third Floor", width/2 , 1680);

  pop();

}

//Functions that draw path-related graphics on the screen;

//Draws a path based on an path-array located on a single floor: Input of nodes the path must go through, and the array holding all locations on the defined floor;
function drawSinglePath(pathArray, nodeLocations) {
  for (let i = 0; i < pathArray.length - 1; i++) {
    push();
    stroke(63, 142, 193);
    strokeWeight(4);
    line(nodeLocations[pathArray[i]][0], nodeLocations[pathArray[i]][1], nodeLocations[pathArray[i+1]][0], nodeLocations[pathArray[i+1]][1]);
    pop();
  }
}
//Draws the complete path by compiling smaller paths on single floors: Input received is an object.
function drawFullPath(paths) {

  //Although two routes are always defined, if the path to find is not multilevel, endNodeRoute will be disregarded(DNE).
  let startNodeRoute = paths.startNodeRoute;
  let endNodeRoute = paths.endNodeRoute;

  //Matrix that defines the x,y coordinates of all nodes on the given floor, endNodeMatrix will be disregarded if not multilevel.
  let startNodeMatrix = paths.startNodeMatrix;
  let endNodeMatrix = paths.endNodeMatrix;

  //Number of floors.
  let numberOfFloors = paths.floors;

  //Draws two connecting paths (throug stairs) if the path is mutlilevel, else, draws the single path.
  if (numberOfFloors > 1) {
     drawSinglePath(startNodeRoute, startNodeMatrix);
     drawSinglePath(endNodeRoute, endNodeMatrix);
  }
  else {
    drawSinglePath(startNodeRoute, startNodeMatrix);
  }
  //Markers for start and end are drawn.
  drawStartPosition();
  drawEndPosition();
}
//THESE TWO FUNCTIONS CAN EASILY BE COMBINED INTO ONE -> Not really nescesary and keeps the code more structured.
//Draws a marker for the start position based on the global "start" variable.
function drawStartPosition() {
  let positions;
  push();
  noStroke();
  //Selects correct locations according to floor.
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
//Draws a marker for the end position based on the global "end" variable.
function drawEndPosition() {
  let positions;
  noStroke();
  push();
  //Selects correct locations according to floor.
  if (end[1] === 1) {
    positions = firstFloorLocations;
  }
  else if (end[1] === 2) {
    positions = secondFloorLocations;
  }
  else if (end[1] === 3) {
    positions = thirdFloorLocations;
  }

  fill(0, 255, 0);
  ellipse(positions[end[0]][0], positions[end[0]][1], 15, 15);
  fill(0, 255, 0, 100);
  ellipse(positions[end[0]][0], positions[end[0]][1], 40, 40);
  pop();
}

//PATH FINDING ALGORITHM -> Dijkstras Algorithm Logic based on Wikipedia and other explanatory sources.

//Returns an object with the information nescesary to select the shortest path
function shortestPath(matrix, startVertex) {

  //Creates three arrays with length equal to matrix
  let done = new Array(matrix.length);
  let pathLengths = new Array(matrix.length);
  let predecessors = new Array(matrix.length);

  done[startVertex] = true;

  //Loops through matrix[startVertex] and writes the values into the pathLengths array
  for (let i = 0; i < matrix.length; i++) {
    //Copies values down from the input matrix into a local matrix.
    pathLengths[i] = matrix[startVertex][i];
    //If there is no path connecting the startVertex with a vertex [i], it is written into predescessors.
    if (matrix[startVertex][i] !== Infinity) {
      predecessors[i] = startVertex;
    }
  }

  //Length from start to itself is 0;
  pathLengths[startVertex] = 0;
  for (let i = 0; i < matrix.length - 1; i++) {
    let closest = -1;
    let closestDistance = Infinity;

    //Finds the distance between adjacent nodes
    for (let j = 0; j < matrix.length; j++) {
      if (!done[j] && pathLengths[j] < closestDistance) {
        closestDistance = pathLengths[j];
        closest = j;
      }
    }

    done[closest] = true;

    //Checks all visited locations to see if there is a possibly closer path to the startvertex.
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

//Takes in the object and the endvertex, and constructs a path based on the distances from nodes
function constructPath(object, endVertex) {
  let path = [];
  //While the path has not yet been created -> pushes the values from the spanning tree
  do {
    path.unshift(endVertex);
    endVertex = object.tree[endVertex];
  }
  while (endVertex !== object.startVertex);
  path.unshift(object.startVertex);
  return path;
}
//Compiles the two functions into a single callable one.
function findPath(matrix, startNode, endNode) {
  return constructPath(shortestPath(matrix, startNode), endNode);
}

//Combines to create full path if the path is multilevel by finding the route to each set of stairs and overlaying the paths with eachother.
function createFullPath(startNode, endNode) {
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
