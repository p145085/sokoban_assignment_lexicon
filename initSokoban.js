let tileMapSane = {
    width: 19,
    height: 16,
    mapGrid: [
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', 'W', 'W', 'W', 'W', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', 'W', 'B', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', 'W', 'W', 'W', ' ', ' ', 'B', 'W', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', 'W', ' ', ' ', 'B', ' ', 'B', ' ', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    ['W', 'W', 'W', ' ', 'W', ' ', 'W', 'W', ' ', 'W', ' ', ' ', ' ', 'W', 'W', 'W', 'W', 'W', 'W'],
    ['W', ' ', ' ', ' ', 'W', ' ', 'W', 'W', ' ', 'W', 'W', 'W', 'W', 'W', ' ', ' ', 'G', 'G', 'W'],
    ['W', ' ', 'B', ' ', ' ', 'B', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'G', 'G', 'W'],
    ['W', 'W', 'W', 'W', 'W', ' ', 'W', 'W', 'W', ' ', 'W', 'P', 'W', 'W', ' ', ' ', 'G', 'G', 'W'],
    [' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
    [' ', ' ', ' ', ' ', 'W', 'W', 'W', 'W', 'W', 'W', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
    ]
};

let tileMapUpdated = {
  width: 19,
  height: 16,
  mapGrid: [
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', 'W', 'W', 'W', 'W', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', 'W', 'B', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', 'W', 'W', 'W', ' ', ' ', 'B', 'W', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', 'W', ' ', ' ', 'B', ' ', 'B', ' ', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  ['W', 'W', 'W', ' ', 'W', ' ', 'W', 'W', ' ', 'W', ' ', ' ', ' ', 'W', 'W', 'W', 'W', 'W', 'W'],
  ['W', ' ', ' ', ' ', 'W', ' ', 'W', 'W', ' ', 'W', 'W', 'W', 'W', 'W', ' ', ' ', 'G', 'G', 'W'],
  ['W', ' ', 'B', ' ', ' ', 'B', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'G', 'G', 'W'],
  ['W', 'W', 'W', 'W', 'W', ' ', 'W', 'W', 'W', ' ', 'W', 'P', 'W', 'W', ' ', ' ', 'G', 'G', 'W'],
  [' ', ' ', ' ', ' ', 'W', ' ', ' ', ' ', ' ', ' ', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
  [' ', ' ', ' ', ' ', 'W', 'W', 'W', 'W', 'W', 'W', 'W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
  ]
};

function buildMap() {
    const idPrefix = {
        ' ': 'emptyImg',
        'W': 'Wall',
        'B': 'Box',
        'P': 'Player',
        'G': 'Goal',
      };
      const counter = {
        ' ': 0,
        'W': 0,
        'B': 0,
        'P': 0,
        'G': 0,
      };
      const images = {
        ' ': '/images/tile1.png',
        'W': '/images/wall.png',
        'B': '/images/box.png',
        'P': '/images/character.png',
        'G': '/images/goal.png',
      };

    if (!document.body == null){
      const temp = document.getElementById("body");
      const temp2 = document.getElementById("sokobanBoard");
      temp.removeChild(temp2);
    }

    const gameBoard = document.createElement("table");
    gameBoard.id = "sokobanBoard";
    document.body.appendChild(gameBoard);
    
    for (const row of tileMapUpdated.mapGrid) {
        const trow = document.createElement("tr");
        gameBoard.appendChild(trow);
    
        for (const col of row) {
            const tcol = document.createElement("td");
            gameBoard.appendChild(tcol);
    
            const elImage = document.createElement("img");
            elImage.id = `${idPrefix[col]}${counter[col]++}`;
            elImage.src = images[col];
            elImage.style.width = '25px';
            elImage.style.height = '25px';
            tcol.appendChild(elImage);
        }
    }
};
    
function getPositionOfPlayer(){
  for (let row = 0; row < tileMapUpdated.mapGrid.length; row++){
    for (let col = 0; col < tileMapUpdated.mapGrid[row].length; col++){
      if (tileMapUpdated.mapGrid[row][col] === 'P'){
        return [row, col];
      }
    }
  }
};

document.onkeydown = (e) => {
  let pos = getPositionOfPlayer();
  let nextPos;
  let nextnextPos;

  e = e || window.event;
  if (e.keyCode === 38) {
    console.log('up arrow pressed')
    pos = getPositionOfPlayer();
    nextPos = tileMapUpdated.mapGrid[pos[0] - 1][pos[1]];

    if (nextPos === 'W'){
      console.log(false);
      return false;
    } else if (nextPos === 'B') {
      nextnextPos = tileMapUpdated.mapGrid[pos[0] - 2][pos[1]];
      if (nextnextPos === 'W' || nextnextPos === 'B') {
        console.log("Box would move into a wall.");
        return false;
      } else {
        tileMapUpdated.mapGrid[pos[0] - 2][pos[1]] = 'B';
        tileMapUpdated.mapGrid[pos[0] - 1][pos[1]] = 'P';
        tileMapUpdated.mapGrid[pos[0]][pos[1]] = ' ';
      }
    } 
    else {
      tileMapUpdated.mapGrid[pos[0]][pos[1]] = ' ';
      tileMapUpdated.mapGrid[pos[0] - 1][pos[1]] = 'P';
    }
  } else if (e.keyCode === 40) {
    console.log('down arrow pressed')
    pos = getPositionOfPlayer();
    nextPos = tileMapUpdated.mapGrid[pos[0] + 1][pos[1]];

    if (nextPos === 'W'){
      console.log(false);
      return false;
    } else if (nextPos === 'B') {
      nextnextPos = tileMapUpdated.mapGrid[pos[0] + 2][pos[1]];
      if (nextnextPos === 'W' || nextnextPos === 'B') {
        console.log("Box would move into a wall.");
        return false;
      } else {
        tileMapUpdated.mapGrid[pos[0] + 2][pos[1]] = 'B';
        tileMapUpdated.mapGrid[pos[0] + 1][pos[1]] = 'P';
        tileMapUpdated.mapGrid[pos[0]][pos[1]] = ' ';
      }
    }
    else {
      tileMapUpdated.mapGrid[pos[0]][pos[1]] = ' ';
      tileMapUpdated.mapGrid[pos[0] + 1][pos[1]] = 'P';
    }
  } else if (e.keyCode === 37) {
    console.log('left arrow pressed')
    pos = getPositionOfPlayer();
    nextPos = tileMapUpdated.mapGrid[pos[0]][pos[1] - 1];

    if (nextPos === 'W'){
      console.log(false);
      return false;
    } else if (nextPos === 'B') {
      nextnextPos = tileMapUpdated.mapGrid[pos[0]][pos[1] - 2];
      if (nextnextPos === 'W' || nextnextPos === 'B') {
        console.log("Box cannot move further.");
        return false;
      } else {
        tileMapUpdated.mapGrid[pos[0]][pos[1] - 2] = 'B';
        tileMapUpdated.mapGrid[pos[0]][pos[1] - 1] = 'P';
        tileMapUpdated.mapGrid[pos[0]][pos[1]] = ' ';
      }
    }
    else {
      tileMapUpdated.mapGrid[pos[0]][pos[1]] = ' ';
      tileMapUpdated.mapGrid[pos[0]][pos[1] - 1] = 'P';
    }
  } else if (e.keyCode === 39) {
    console.log('right arrow pressed')
    pos = getPositionOfPlayer();
    nextPos = tileMapUpdated.mapGrid[pos[0]][pos[1] + 1];

    if (nextPos === 'W'){
      console.log(false);
      return false;
    } else if (nextPos === 'B') {
      nextnextPos = tileMapUpdated.mapGrid[pos[0]][pos[1] + 2];
      if (nextnextPos === 'W' || nextnextPos === 'B') {
        console.log("Box would move into a wall.");
        return false;
      } else {
        tileMapUpdated.mapGrid[pos[0]][pos[1] + 2] = 'B';
        tileMapUpdated.mapGrid[pos[0]][pos[1] + 1] = 'P';
        tileMapUpdated.mapGrid[pos[0]][pos[1]] = ' ';
      }
    }
    else {
      tileMapUpdated.mapGrid[pos[0]][pos[1]] = ' ';
      tileMapUpdated.mapGrid[pos[0]][pos[1] + 1] = 'P';
    }
  }
  buildMap();
};