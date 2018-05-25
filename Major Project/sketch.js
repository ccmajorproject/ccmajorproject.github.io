//Node-Based Graph
// The adjacency matrix defining the graph.

let finishedPath;
let nodeLocations = [[20, 20], [20, 70], [70, 20], [20, 120], [70, 70], [120, 20], [120, 70], [70, 120], [120, 120]];

function setup() {
  createCanvas(600, 600);
  finishedPath = findPath(firstFloor, 0, 14);
  print(finishedPath);
}

function draw() {
  background(255);
  //displayNodes(nodeLocations);
  //drawPath(finishedPath, nodeLocations);

}

function displayNodes(array) {
  let count = -1;
  for (let item of array) {
    count += 1;
    push();
    strokeWeight(5);
    point(item[0], item[1]);
    text(""+count+"",item[0],item[1]);
    pop();
  }
}

function drawPath(pathArray, nodeLocations) {
  for (let i = 0; i < pathArray.length - 1; i++) {
    push();
    strokeWeight(2);
    line(nodeLocations[pathArray[i]][0], nodeLocations[pathArray[i]][1],nodeLocations[pathArray[i+1]][0], nodeLocations[pathArray[i+1]][1]);
    pop();
  }
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
