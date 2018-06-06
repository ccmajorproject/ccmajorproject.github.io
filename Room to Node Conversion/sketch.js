// Room to Node Conversion
// Catherine Liu
// June 4, 2018

let otherRooms;
let roomNumber, button, response, room;

function setup() {
  createCanvas(windowWidth, windowHeight);


  //User types in a room number
  roomNumber = createInput('');
  roomNumber.position(300, 65);

  button = createButton('Submit');
  button.position(roomNumber.x + roomNumber.width, 65);
  button.mousePressed(sendToConvertor());

  response = createElement('h4', 'Enter Room Number');
  response.position(330, 20);


  //User selects a room
  textAlign(CENTER);
  otherRooms = createSelect();
  otherRooms.position(50, 50);
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
  otherRooms.option ('Wrestling Room');
  otherRooms.option ('Wrestling Room Entrance');
  otherRooms.option('Dance Studio');
  otherRooms.option('Courtyard');
  otherRooms.option('Tech Doors North Entrance');
  otherRooms.option('Tech Doors South Entrance');
  otherRooms.changed(convertor);
}

function sendToConvertor() {
  room = roomNumber.value();
  convertor(room);
}

// function draw() {
//   convertor();
// }

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
  else if (input === 130 || input === 132) {
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
}
