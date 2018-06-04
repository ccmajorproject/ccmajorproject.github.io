// Room to Node Conversion
// Catherine Liu
// June 4, 2018

function setup() {
  createCanvas(windowWidth, windowHeight);
}


function draw() {
  convertor(221);
}

function convertor(input) {
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
    return [11, 1];
  }
  else if (input === 'washrooms3') {
    return [13, 1];
  }
  else if (input === 112 || input === 113 || input === 114) {
    return [15, 1];
  }
  else if (input === 'dance studio') {
    return [16, 1];
  }
  else if (input === 'staircase3') {
    return [19, 1];
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
    return [23, 1];
  }
  else if (input === 126 || input === 129) {
    return [24, 1];
  }
  else if (input === 'courtyard') {
    return [26, 1];
  }
  else if (input === 'staircase5') {
    return [27, 1];
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
}
