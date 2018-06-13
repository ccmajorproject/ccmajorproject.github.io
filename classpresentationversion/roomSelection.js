// Room to Node Conversion
// Catherine Liu
// June 4, 2018


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

function roomInput() {
  //User types in a room number
  roomNumber = createInput('');
  roomNumber.position(660, 140);

  roomNumberStart = createInput('');
  roomNumberStart.position(400, 140);

  button1 = createButton('Submit');
  button1.position(roomNumber.x + roomNumber.width, 140);
  button1.mousePressed(function() {
    end = null;
    mouseClickedPosition = false;
    sendToConvertor(int(roomNumber.value()), 'end')
    //sendConv(int(roomNumber.value()))
  });

  button3 = createButton('Submit');
  button3.position(roomNumberStart.x + roomNumberStart.width, 140);
  button3.mousePressed( function() {
    start = null;
    mouseClickedPosition = false;
    sendToConvertor(int(roomNumberStart.value()), 'start')
  });

  text1 = createElement('h6', 'Enter Room Number');
  text1.position(680, 120);
}

function legend() {
  let x = 40;
  let y = 110;
  push();
  rectMode(CENTER);
  textAlign(LEFT);
  text('= Washrooms', x, y);
  text('= Stairs', x, y + 30);
  fill(61, 255, 161);
  rect(x - 20, y - 5, 20, 20);
  fill(237, 206, 83);
  rect(x - 20, y + 25, 20, 20);
  pop();
}



function test() {
  end = null;
  sendToConvertor(int(roomNumber.value()))
}

function sendConv(input) {
  end = convertor(input);
}


function sendToConvertor(input, destination) {
  if (destination === 'end') {
    end = convertor(input);
  }
  else if (destination === 'start'){
    start = convertor(input);
  }
}

function pickRoom() {
  text2 = createElement('h6', 'Other Room Options');
  text2.position(680, 180);

  //User selects a room
  otherRooms = createSelect();
  otherRooms.position(660, 200);
  otherRooms.option('--');
  otherRooms.option('Main Entrance');
  otherRooms.option('Main Office');
  otherRooms.option('Washrooms');
  otherRooms.option('Washrooms (Gender Neutral)');
  otherRooms.option('Gym 1 (Girls)');
  otherRooms.option('Gym 2 (Boys)');
  otherRooms.option('Library');
  otherRooms.option('Cafeteria');
  otherRooms.option('Auditorium');
  otherRooms.option('Student Services');
  otherRooms.option('Bleachers');
  otherRooms.option('SRC Room');
  otherRooms.option('Wrestling Room');
  otherRooms.option('Wrestling Room Entrance');
  otherRooms.option('Dance Studio');
  otherRooms.option('Courtyard');
  otherRooms.option('Tech Doors North Entrance');
  otherRooms.option('Tech Doors South Entrance');
  otherRooms.changed(function() {
    end = null;
    sendToConvertor(otherRooms.value())

  });
}



function refreshButton() {
  button2 = createButton('Refresh');
  button2.position(roomNumber.x + roomNumber.width + 110, 120);
  button2.mousePressed(refresh);
}

function refresh() {

  clickedMousePosition = false;

  trueStartCoord = null;
  trueStartNode = null;

  start = null;
  end = null;

  roomNumber.value('');
  roomNumberStart.value('');
}


function convertor(input) {
  input = input || otherRooms.value();

  //First Floor
  if (input === 'Main Entrance') {
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
  else if (input === 101 || input === 102 || input === 103 || input === 'Washrooms1') {
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
  else if (input === 'Washrooms2') {
    return [13, 1];
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
  else if (input === 132 || input === 133 || input === 134) {
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
  else if (input === 205 || input === 207 || input === 208 || input === 'Washrooms3') {
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
  else if (input === 'Washrooms4') {
    return [8, 2];
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
  else if (input === 303 || input === 'Washrooms5') {
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
    return start;
  }
}
