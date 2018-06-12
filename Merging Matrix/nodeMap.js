

let STAIRS = 0;
let _ = Infinity;

//FIRST FLOOR

// x, y coordinates of all nodes
let firstFloorLocations = [[190, 1028], [190, 990], [100, 990], [190, 970], [246, 970], [326, 970], [326, 943], [390, 970], [460, 970], [546, 970],  [592, 970], [592, 997],
  [592, 856], [644, 856], [592, 785], [654, 785], [654, 733], [592, 733], [592, 654], [627, 654], [531, 785], [456, 785], [392, 785], [383, 760],
  [309, 785], [246, 785], [246, 898], [196, 898], [178, 892], [178, 814], [196, 731],  [246, 731], [246, 664], [246, 579], [219, 579], [128, 671],
  [246, 490], [166, 490], [380, 490], [456, 490], [535, 490], [560, 490], [617, 490], [560, 413], [560, 383], [560, 333]
];

// nodes that are stairs
let firstFloorStairs = [6, 11, 19, 23, 27];

//adjacency matrix
let firstFloor = [
  [0, 1, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _,],
  [1, 0, 1, 1, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _,],
  [_, 1, 0, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _,],
  [_, 1, _, 0, 1, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, 3, 2, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _,],
  [_, _, _, 1, 0, 1, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, 1, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _,],
  [_, _, _, _, 1, 0, 1, 1, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _,],
  [_, _, _, _, _, 1, STAIRS, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _,],
  [_, _, _, _, _, 1, _, 0, 1, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _,],
  [_, _, _, _, _, _, _, 1, 0, 1, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _,],
  [_, _, _, _, _, _, _, _, 1, 0, 1, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _,],
  [_, _, _, _, _, _, _, _, _, 1, 0, 1, 1, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _,],
  [_, _, _, _, _, _, _, _, _, _, 1, STAIRS, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _,],
  [_, _, _, _, _, _, _, _, _, _, 1, _, 0, 1, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _,],
  [_, _, _, _, _, _, _, _, _, _, _, _, 1, 0, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _,],
  [_, _, _, _, _, _, _, _, _, _, _, _, 1, _, 0, 1, _, 1, _, _, 1, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _,],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, 1, 0, 1, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _,],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, 1, 0, 1, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _,],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, 1, _, 1, 0, 1, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _,],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, 1, 0, 1, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _,],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, 1, STAIRS, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _,],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, 1, _, _, _, _, _, 0, 1, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _,],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, 1, 0, 1, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _,],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, 1, 0, 1, 1, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _,],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, 1, STAIRS, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _,],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, 1, _, 0, 1, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _,],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, 1, 0, 1, _, _, _, _, 1, _, _, _, _, _, _, _, _, _, _, _, _, _, _,],
  [_, _, _, _, 1, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, 1, 0, 1, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _,],
  [_, _, _, 3, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, 3, STAIRS, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _,],
  [_, _, _, 2, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, 0, 1, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _,],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, 1, 0, 1, _, _, _, _, 1, _, _, _, _, _, _, _, _, _, _,],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, 1, 0, 1, _, _, _, 1, _, _, _, _, _, _, _, _, _, _,],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, 1, _, _, _, _, 1, 0, 1, _, _, _, _, _, _, _, _, _, _, _, _, _,],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, 1, 0, 1, _, _, _, _, _, _, _, _, _, _, _, _,],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, 1, 0, 1, _, 1, _, _, _, _, _, _, _, _, _,],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, 1, 0, 1, _, _, _, _, _, _, _, _, _, _,],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, 1, 1, _, _, _, _, 2, 0, _, _, _, _, _, _, _, _, _, _,],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, 1, _, _, 0, 1, 1, _, _, _, _, _, _, _,],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, 1, 0, _, _, _, _, _, _, _, _,],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, 1, _, 0, 1, _, _, _, _, _, _,],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, 1, 0, 1, _, _, _, _, _,],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, 1, 0, 1, _, _, _, _,],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, 1, 0, 1, 1, _, _,],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, 1, 0, _, _, _,],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, 1, _, 0, 1, _,],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, 1, 0, 1,],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, 1, 0,],
];

//SECOND FLOOR

//x, y coordinates of second floor nodes
let secondFloorLocations = [[320, 1510], [320, 1530], [365, 1530], [448, 1530], [539, 1530], [582, 1530], [582, 1558], [582, 1433], [636, 1433], [582, 1374], [643, 1374], [643, 1328],
  [582, 1328], [582, 1305], [582, 1263], [612, 1263], [508, 1370], [470, 1370], [437, 1370], [384, 1370], [377, 1346], [316, 1370], [237, 1370], [237, 1530],
  [173, 1530], [173, 1470], [202, 1470], [202, 1350], [470, 1305], [520, 1305]
];

//second floor stairs
let secondFloorStairs = [0, 6, 15, 20, 26];

//second floor adjaceny matrix
let secondFloor = [
  [STAIRS, 1, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, ],
  [1, 0, 1, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, 1, _, _, _, _, _, _, ],
  [_, 1, 0, 1, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, ],
  [_, _, 1, 0, 1, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, ],
  [_, _, _, 1, 0, 1, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, ],
  [_, _, _, _, 1, 0, 1, 1, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, ],
  [_, _, _, _, _, 1, STAIRS, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, ],
  [_, _, _, _, _, 1, _, 0, 1, 1, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, ],
  [_, _, _, _, _, _, _, 1, 0, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, ],
  [_, _, _, _, _, _, _, 1, _, 0, 1, _, 1, _, _, _, 1, _, _, _, _, _, _, _, _, _, _, _, _, _, ],
  [_, _, _, _, _, _, _, _, _, 1, 0, 1, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, ],
  [_, _, _, _, _, _, _, _, _, _, 1, 0, 1, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, ],
  [_, _, _, _, _, _, _, _, _, 1, _, 1, 0, 1, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, ],
  [_, _, _, _, _, _, _, _, _, _, _, _, 1, 0, 1, _, _, _, _, _, _, _, _, _, _, _, _, _, _, 1, ],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, 1, 0, 1, _, _, _, _, _, _, _, _, _, _, _, _, _, _, ],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, 1, STAIRS, _, _, _, _, _, _, _, _, _, _, _, _, _, _, ],
  [_, _, _, _, _, _, _, _, _, 1, _, _, _, _, _, _, 0, 1, _, _, _, _, _, _, _, _, _, _, _, _, ],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, 1, 0, 1, _, _, _, _, _, _, _, _, _, 1, _, ],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, 1, 0, 1, _, _, _, _, _, _, _, _, _, _, ],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, 1, 0, 1, 1, _, _, _, _, _, _, _, _, ],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, 1, STAIRS, _, _, _, _, _, _, _, _, _, ],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, 1, _, 0, 1, _, _, _, _, _, _, _, ],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, 1, 0, 1, _, _, _, _, _, _, ],
  [_, 1, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, 1, 0, 1, _, _, _, _, _, ],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, 1, 0, 1, _, _, _, _, ],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, 1, 0, 1, 1, _, _, ],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, 3, STAIRS, _, _, _, ],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, 1, _, 0, _, _, ],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, _, 1, _, _, _, _, _, _, _, _, _, _, 0, 1, ],
  [_, _, _, _, _, _, _, _, _, _, _, _, _, 1, _, _, _, _, _, _, _, _, _, _, _, _, _, _, 1, 0, ],

];

//THIRD FLOOR

//x, y coordinates of third floor nodes
let thirdFloorLocations = [[180, 1766], [180, 1816], [236, 1816], [341, 1816], [420, 1816], [483, 1816], [534, 1816], [534, 1854]
];

//Third FLoor Stair Locations
let thirdFloorStairs = [0, 7];

//Adjaceny matrix
let thirdFloor = [
  [STAIRS, 1, _, _, _, _, _, _,],
  [1, 0, 1, _, _, _, _, _,],
  [_, 1, 0, 1, _, _, _, _,],
  [_, _, 1, 0, 1, _, _, _,],
  [_, _, _, 1, 0, 1, _, _,],
  [_, _, _, _, 1, 0, 1, _,],
  [_, _, _, _, _, 1, 0, 1,],
  [_, _, _, _, _, _, 1, STAIRS,]
];
