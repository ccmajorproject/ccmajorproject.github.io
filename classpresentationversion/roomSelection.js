// Room to Node Conversion
// Catherine Liu
// June 4, 2018


function displayAllMenu(x, y) {

  let modX = x + translateX;
  let constantX = 300;

  push();
  rectMode(CORNER);

  noStroke();

  fill(148, 186, 247);
  rect(x-110, y-25, constantX * 2 + 325, y + 65)
  textAlign(LEFT);

  fill(130, 130, 155);
  rect(x - 10, y + 25 + 5, modX + constantX + 80, 40)
  rect(x - 10, y + 25 + 5 + 63, modX + constantX + 40, 40)

  fill(0);
  //LHS
  textStyle(BOLD);
  textSize(20);
  text("Enter Current Location", x, y);

  textStyle(NORMAL);
  textSize(13);
  text("Room Number", x, y + 23);
  startRoomNumber.position(modX, y + 30 + 5);

  text("Select Other Rooms", x, y + 90);
  otherRoomsStart.position(modX, y + 100);


  ///RHS
  textStyle(BOLD);
  textSize(20);
  text("Enter Destination", x + constantX + 50, y)

  textStyle(NORMAL);
  textSize(13);
  text("Room Number", x + constantX + 50, y + 23);
  endRoomNumber.position(modX + constantX + 50, y + 30 + 5);

  text("Select Other Rooms", x + constantX + 50, y + 90);
  otherRoomsEnd.position(modX + constantX + 50, y + 100);

  //other
  //submitButton.position(modX + constantX + 360, y - 10);
  refreshButton.position(modX + constantX + 250, y + 30 + 5);

  pop();

  // displayLegend(modX + 30, y + 80)
  push();
  rectMode(CENTER);
  text('= Washrooms', modX + constantX + 150, y + 85);
  text('= Stairs', modX + constantX + 150, y + 115);
  fill(61, 255, 161);
  rect(modX + constantX + 125, y + 80, 20, 20);
  fill(237, 206, 83);
  rect(modX + constantX + 125, y + 110, 20, 20);
  pop();

}

function roomInput() {
  //User types in a room number
  endRoomNumber = createInput('');
  startRoomNumber = createInput('');
}


function pickRoom() {
  //user selects a room.
  otherRoomsStart = createSelect();
  otherRoomsStart.option('--');
  otherRoomsStart.option('Main Entrance');
  otherRoomsStart.option('Main Office');
  otherRoomsStart.option('Washrooms (Gender Neutral)');
  otherRoomsStart.option('Gym 1 (Girls)');
  otherRoomsStart.option('Gym 2 (Boys)');
  otherRoomsStart.option('Library');
  otherRoomsStart.option('Cafeteria');
  otherRoomsStart.option('Auditorium');
  otherRoomsStart.option('Student Services');
  otherRoomsStart.option('Bleachers');
  otherRoomsStart.option('SRC Room');
  otherRoomsStart.option('Wrestling Room');
  otherRoomsStart.option('Wrestling Room Entrance');
  otherRoomsStart.option('Dance Studio');
  otherRoomsStart.option('Courtyard');
  otherRoomsStart.option('Tech Doors North Entrance');
  otherRoomsStart.option('Tech Doors South Entrance');

  otherRoomsStart.changed(function() {
    startRoomNumber.value('');
    start = convertor(otherRoomsStart.value());
  });


  otherRoomsEnd = createSelect();
  otherRoomsEnd.position(660, 200);
  otherRoomsEnd.option('--');
  otherRoomsEnd.option('Main Entrance');
  otherRoomsEnd.option('Main Office');
  otherRoomsEnd.option('Washrooms');
  otherRoomsEnd.option('Washrooms (Gender Neutral)');
  otherRoomsEnd.option('Gym 1 (Girls)');
  otherRoomsEnd.option('Gym 2 (Boys)');
  otherRoomsEnd.option('Library');
  otherRoomsEnd.option('Cafeteria');
  otherRoomsEnd.option('Auditorium');
  otherRoomsEnd.option('Student Services');
  otherRoomsEnd.option('Bleachers');
  otherRoomsEnd.option('SRC Room');
  otherRoomsEnd.option('Wrestling Room');
  otherRoomsEnd.option('Wrestling Room Entrance');
  otherRoomsEnd.option('Dance Studio');
  otherRoomsEnd.option('Courtyard');
  otherRoomsEnd.option('Tech Doors North Entrance');
  otherRoomsEnd.option('Tech Doors South Entrance');

  otherRoomsEnd.changed(function() {
    endRoomNumber.value('');
    end = convertor(otherRoomsEnd.value());
  });
}

function refreshButton() {
  refreshButton = createButton('Refresh');
  refreshButton.mousePressed(refresh);
}

function refresh() {

  start = null;
  end = null;

  endRoomNumber.value('');
  startRoomNumber.value('');
  otherRoomsStart.value('--');
  otherRoomsEnd.value('--');

}

function convertor(input) {
  //input = input || otherRoomsEnd.value();

  if (input === 'Washrooms') {
    if (start[1] === 1) {
      startCoords = firstFloorLocations[start[0]];
      closestWashroom = (nearestNode(firstFloorLocations, washroomLocations[nearestNode(washroomLocations, startCoords)]));
      return ([closestWashroom, 1]);
    }
    else if (start[1] === 2) {
      startCoords = secondFloorLocations[start[0]];
      closestWashroom = (nearestNode(secondFloorLocations, washroomLocations[nearestNode(washroomLocations, startCoords)]));
      return ([closestWashroom, 2]);
    }
    else {
      startCoords = thirdFloorLocations[start[0]];
      closestWashroom = (nearestNode(thirdFloorLocations, washroomLocations[nearestNode(washroomLocations, startCoords)]));
      return ([closestWashroom, 3]);
    }
  }

  //First Floor
  else if (input === 'Main Entrance') {
    return [0, 1];
  }
  else if (input === 'Main Office' || input === 'Washrooms (Gender Neutral)') {
    return [1, 1];
  }
  else if (input === 'Auditorium') {
    return [2, 1];
  }
  else if (input === 'Student Services') {
    return [5, 1];
  }
  else if (input === 101 || input === 102 || input === 103) {
    return [7, 1];
  }
  else if (input === 104 ||input === 105 || input === 107) {
    return [8, 1];
  }
  else if (input === 106 || input === 109) {
    return [9, 1];
  }
  else if (input === 110 || input === 111) {
    return [10, 1];
  }
  else if (input === 112 || input === 113 || input === 114) {
    return [15, 1];
  }
  else if (input === 'Dance Studio') {
    return [16, 1];
  }
  else if (input === 119 || input === 121 || input === 'Cafeteria') {
    return [20, 1];
  }
  else if (input === 122 || input === 123 || input === 125) {
    return [21, 1];
  }
  else if (input === 127) {
    return [22, 1];
  }
  else if (input === 126 || input === 129) {
    return [24, 1];
  }
  else if (input === 'Courtyard') {
    return [26, 1];
  }
  else if (input === 'Gym1 (Girls)') {
    return [29, 1];
  }
  else if (input === 130 || input === 131) {
    return [32, 1];
  }
  else if (input === 'Gym2 (Boys)') {
    return [35, 1];
  }
  else if (input === 132 || input === 133 || input === 134 || input === 136) {
    return [36, 1];
  }
  else if (input === 'Tech Doors North Entrance') {
    return [37, 1];
  }
  else if (input === 135 || input === 138 || input === 140 || input === 142) {
    return [38, 1];
  }
  else if (input === 137 || input === 139) {
    return [39, 1];
  }
  else if (input === 141) {
    return [40, 1];
  }
  else if (input === 143) {
    return [40, 1];
  }
  else if (input === 145 || input === 147 || input === 144) {
    return [41, 1];
  }
  else if (input === 'Tech Doors South Entrance') {
    return [42, 1];
  }
  else if (input === 'Wrestling Room') {
    return [43, 1];
  }
  else if (input === 146 || input === 148) {
    return [44, 1];
  }
  else if (input === 'Wrestling Room Entrance') {
    return [45, 1];
  }

  //Second Floor
  else if (input === 205 || input === 207 || input === 208) {
    return [2, 2];
  }
  else if (input === 209 || input === 210 || input === 211) {
    return [3, 2];
  }
  else if (input === 212 || input === 213 || input === 214) {
    return [4, 2];
  }
  else if (input === 215 || input === 216) {
    return [5, 2];
  }
  else if (input === 217) {
    return [9, 2];
  }
  else if (input === 218 || input === 219) {
    return [10, 2];
  }
  else if (input === 220 || input === 221) {
    return [11, 2];
  }
  else if (input === 227 || input === 229) {
    return [16, 2];
  }
  else if (input === 231 || input === 232 || input === 234) {
    return [18, 2];
  }
  else if (input === 233) {
    return [19, 2];
  }
  else if (input === 235 || input === 237 || input === 'Library') {
    return [21, 2];
  }
  else if (input === 201 || input === 203 || input === 'SRC Room' || input === 206) {
    return [23, 2];
  }
  else if (input === 200 || input === 202) {
    return [24, 2];
  }
  else if (input === 'Bleachers') {
    return [25, 2];
  }
  else if (input === 224 || input === 230 || input === 225) {
    return [28, 2];
  }
  else if (input === 223 || input === 228) {
    return [29, 2];
  }

  //Third Floor
  else if (input === 301) {
    return [1, 3];
  }
  else if (input === 303) {
    return [2, 3];
  }
  else if (input === 302 || input === 304 || input === 305) {
    return [3, 3];
  }
  else if (input === 306) {
    return [4, 3];
  }
  else if (input === 307 || input === 308) {
    return [5, 3];
  }
  else if (input === 309 || input === 310) {
    return [6, 3];
  }

  else {
    return null;
  }
}
