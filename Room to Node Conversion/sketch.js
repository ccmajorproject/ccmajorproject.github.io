// Room to Node Conversion
// Catherine Liu
// June 4, 2018

let otherRooms;

function setup() {
  createCanvas(windowWidth, windowHeight);

  textAlign(CENTER);
  otherRooms = createSelect();
  otherRooms.position(50, 50);
  otherRooms.option('--');
  otherRooms.option('Main Entrance');
  otherRooms.option('Stairs');
  otherRooms.option('Main Office');
  otherRooms.option('Washrooms');
  otherRooms.option('Washrooms (Gender Neutral)');
  otherRooms.option('Gym 1 (Girls)');
  otherRooms.option('Gym 2 (Boys)');
  otherRooms.option('Auditorium');
  otherRooms.option('Student Services');
  otherRooms.option('SRC Room');
  otherRooms.option('Dance Studio');
  otherRooms.option('Cafeteria');
  otherRooms.option('Courtyard');
  otherRooms.changed(mySelectEvent);
}

function mySelectEvent() {
  let item = otherRooms.value();
  background(200);
  textSize(50);
  text('You will now be directed to the ' + item + '!', width/2, height/2);
}


function draw() {
  convertor();
}

function convertor(input) {
  //First Floor
  if (input === 'main entrance') {
    return [0, 1];
  }
  else if (input === 'main office' || input === 'washrooms(gender neutral)') {
    return [1, 1];
  }
  else if (input === 'auditorium') {
    return [2, 1];
  }
  else if (input === 'student services') {
    return [5, 1];
  }
  else if (input === 'staircase1') {
    return [6, 0];
  }
  else if (input === 101 || input === 102 || input === 103 || input === 'washrooms1') {
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
  else if (input === 'staircase2') {
    return [11, 0];
  }
  else if (input === 'washrooms2') {
    return [13, 1];
  }
  else if (input === 112 || input === 113 || input === 114) {
    return [15, 1];
  }
  else if (input === 'dance studio') {
    return [16, 1];
  }
  else if (input === 'staircase3') {
    return [19, 0];
  }
  else if (input === 119 || input === 121 || input === 'cafeteria') {
    return [20, 1];
  }
  else if (input === 122 || input === 123 || input === 125) {
    return [21, 1];
  }
  else if (input === 127) {
    return [22, 1];
  }
  else if (input === 'staircase4') {
    return [23, 0];
  }
  else if (input === 126 || input === 129) {
    return [24, 1];
  }
  else if (input === 'courtyard') {
    return [26, 1];
  }
  else if (input === 'staircase5') {
    return [27, 0];
  }
  else if (input === 'gym1(girls)') {
    return [29, 1];
  }
  else if (input === 130 || input === 132) {
    return [32, 1];
  }
  else if (input === 'gym2(boys)') {
    return [35, 1];
  }
  else if (input === 132 || input === 133 || input === 134) {
    return [36, 1];
  }
  else if (input === 'entrance/exit1') {
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
  else if (input === 'entrance/exit2') {
    return [41, 1];
  }
  else if (input === 'wrestling room') {
    return [43, 1];
  }
  else if (input === 146 || input === 148) {
    return [44, 1];
  }
  else if (input === 'entrance/exit3') {
    return [45, 1];
  }


  //Second Floor
  else if (input === 205 || input === 207 || input === 208 || input === 'washrooms3') {
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
  else if (input === 'washrooms4') {
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
  else if (input === 235 || input === 237) {
    return [21, 2];
  }
  else if (input === 201 || input === 203 || input === '204(src)' || input === 206) {
    return [23, 2];
  }
  else if (input === 200 || input === 202) {
    return [24, 2];
  }
  else if (input === 'bleachers') {
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
  else if (input === 303 || input === 'washrooms5') {
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
