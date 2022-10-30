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

    const table = document.createElement("table");
    table.id = "sokobanBoard";
    document.body.appendChild(table);
    
    for (const row of tileMapUpdated.mapGrid) {
        const trow = document.createElement("tr");
        table.appendChild(trow);
    
        for (const col of row) {
            const tcol = document.createElement("td");
            table.appendChild(tcol);
    
            const elImage = document.createElement("img");
            elImage.id = `${idPrefix[col]}${counter[col]++}`;
            elImage.src = images[col];
            elImage.style.width = '25px';
            elImage.style.height = '25px';
            tcol.appendChild(elImage);
        }
    }
};
    
function getPosition(){
  for (let row = 0; row < tileMapUpdated.mapGrid.length; row++){
    for (let col = 0; col < tileMapUpdated.mapGrid[row].length; col++){
      if (tileMapUpdated.mapGrid[row][col] === 'P'){
        return [col, row];
      }
    }
  }
}

document.onkeydown = (e) => {
  e = e || window.event;
  if (e.keyCode === 38) {
    console.log('up arrow pressed')
    let pos = getPosition();
    tileMapUpdated.mapGrid[pos[0]][pos[1]] = ' ';
    tileMapUpdated.mapGrid[pos[0] - 1][pos[1]] = 'P';
  } else if (e.keyCode === 40) {
    console.log('down arrow pressed')
    let pos = getPosition();
    tileMapUpdated.mapGrid[pos[0]][pos[1]] = ' ';
    tileMapUpdated.mapGrid[pos[0] + 1][pos[1]] = 'P';
  } else if (e.keyCode === 37) {
    console.log('left arrow pressed')
    let pos = getPosition();
    tileMapUpdated.mapGrid[pos[0]][pos[1]] = ' ';
    tileMapUpdated.mapGrid[pos[0]][pos[1] - 1] = 'P';
  } else if (e.keyCode === 39) {
    console.log('right arrow pressed')
    let pos = getPosition();
    tileMapUpdated.mapGrid[pos[0]][pos[1]] = ' ';
    tileMapUpdated.mapGrid[pos[0]][pos[1] + 1] = 'P';
  }
  // console.log(tileMapUpdated.mapGrid[pos[0]][pos[1]]);
}