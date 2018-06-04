//Node-Based Graph
// The adjacency matrix defining the graph.

let finishedPath;
let map1, map2, map3;
let nodeArray = [];
let hypArray = [];

function preload(){
  map1 = loadImage("images/floor1.png");
  map2 = loadImage("images/floor2.png");
  map3 = loadImage("images/floor3.png");
}

function setup() {
  let cnv = createCanvas(800, 2000);
  let x = (windowWidth - width) / 2;
  cnv.position(x, 0);

  finishedPath = findPath(firstFloor, 16, 42);
}

function draw() {
  background(255);

  image(map1, 0, 300, map1.height/2.5, map1.width/2.5);
  image(map2, 0, map1.width/3 + 550, map2.height/1.7, map2.width/4.5);
  image(map3, width/2 - 250, map1.width/3 + map2.width/4.5 + 650, map3.height/0.7, map3.width/4.5);

  screenText();

  displayNodes(secondFloorLocations);
  displayNodes(firstFloorLocations);
  displayNodes(thirdFloorLocations);
  drawPath(finishedPath, firstFloorLocations, 0, 46);
}

function screenText() {
  textStyle(BOLD);
  textSize(50);
  textAlign(CENTER);
  fill(0);

  text("Walter Murray Collegiate Institute", width/2, 50);

  textSize(25);
  text("First Floor", width/2 , 270);
  text("Second Floor", width/2 , 1150);
  text("Third Floor", width/2 , 1680);

}
function displayNodes(array) {
  let count = -1;
  for (let item of array) {
    count += 1;
    push();
    strokeWeight(5);
    point(item[0], item[1]);
    textSize(10);
    text(""+count+"",item[0],item[1]);
    pop();
  }
}
function drawPath(pathArray, nodeLocations) {
  for (let i = 0; i < pathArray.length - 1; i++) {
    push();
    stroke(63, 142, 193);
    strokeWeight(4);
    line(nodeLocations[pathArray[i]][0], nodeLocations[pathArray[i]][1], nodeLocations[pathArray[i+1]][0], nodeLocations[pathArray[i+1]][1]);
    pop();
  }
  noStroke();
  fill(0, 0, 255);
  ellipse(nodeLocations[pathArray[0]][0], nodeLocations[pathArray[0]][1], 13, 13);
  ellipse(nodeLocations[pathArray[pathArray.length - 1]][0], nodeLocations[pathArray[pathArray.length - 1]][1], 13, 13);
  fill(63, 142, 193, 120);
  ellipse(nodeLocations[pathArray[0]][0], nodeLocations[pathArray[0]][1], 50, 50);
  ellipse(nodeLocations[pathArray[pathArray.length - 1]][0], nodeLocations[pathArray[pathArray.length - 1]][1], 50, 50);
}

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
