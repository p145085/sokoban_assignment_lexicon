
/*   This is the base file for the Sokoban assignment - include this one in your HTML page, before you add the main script file*/

/*   Enum of CSS Classes for the static elements   */
var Tiles = {
    Wall: "tile-wall",
    Space: "tile-space",
    Goal: "tile-goal"
};

/*   Enum of CSS Classes for the moving elements   */
var Entities = {
    Character: "entity-player",
    Block: "entity-block",
    BlockDone: "entity-block-goal"
};

/*  Legend
    W = Wall
    B = Movable block
    P = Player starting position
    G = Goal area for the blocks
*/
var tileMap01 = {
    width: 19,
    height: 16,
    mapGrid: [
    [[' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
    [[' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
    [[' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
    [[' '], [' '], [' '], [' '], ['W'], ['W'], ['W'], ['W'], ['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
    [[' '], [' '], [' '], [' '], ['W'], [' '], [' '], [' '], ['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
    [[' '], [' '], [' '], [' '], ['W'], ['B'], [' '], [' '], ['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
    [[' '], [' '], ['W'], ['W'], ['W'], [' '], [' '], ['B'], ['W'], ['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
    [[' '], [' '], ['W'], [' '], [' '], ['B'], [' '], ['B'], [' '], ['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
    [['W'], ['W'], ['W'], [' '], ['W'], [' '], ['W'], ['W'], [' '], ['W'], [' '], [' '], [' '], ['W'], ['W'], ['W'], ['W'], ['W'], ['W']],
    [['W'], [' '], [' '], [' '], ['W'], [' '], ['W'], ['W'], [' '], ['W'], ['W'], ['W'], ['W'], ['W'], [' '], [' '], ['G'], ['G'], ['W']],
    [['W'], [' '], ['B'], [' '], [' '], ['B'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], ['G'], ['G'], ['W']],
    [['W'], ['W'], ['W'], ['W'], ['W'], [' '], ['W'], ['W'], ['W'], [' '], ['W'], ['P'], ['W'], ['W'], [' '], [' '], ['G'], ['G'], ['W']],
    [[' '], [' '], [' '], [' '], ['W'], [' '], [' '], [' '], [' '], [' '], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W']],
    [[' '], [' '], [' '], [' '], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
    [[' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']],
    [[' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' ']]
    ]
};

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

function buildMap() {    
// let imgCounter = 0;
// let wallCounter = 0;
// let boxCounter = 0;
// let playerCounter = 0;

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

const table = document.getElementById("gameMapTable");
let rows = 0;
let cols = 0;

for (const row of tileMapSane.mapGrid) {
    let trow = document.createElement("tr");
    table.appendChild(trow);

    for (const col of row) {
        let tcol = document.createElement("td");
        table.appendChild(tcol);

        const elImage = document.createElement("img");
        elImage.id = `${idPrefix[col]}${counter[col]++}`;
        elImage.src = images[col];
        elImage.style.width = '25px';
        elImage.style.height = '25px';
        tcol.appendChild(elImage);

        // switch(entry) {
        //     case " ":
        //         let iele = document.createElement("img");
        //         iele.id = 
        //         iele.id = "emptyImg" + imgCounter++;
        //         console.log(iele.id);
        //         iele.src = "/images/tile1.png";
        //         iele.style.width = "25px";
        //         iele.style.height = "25px";
                
        //         console.log(iele);

        //         document.body.appendChild(iele);
        //         break;
        //     case "W":
        //         let wele = document.createElement("img");
        //         wele.id = "Wall" + wallCounter++;
        //         console.log(wele.id);
        //         wele.src = "/images/wall.png";
        //         wele.style.width = "25px";
        //         wele.style.height = "25px";
                
        //         console.log(wele);

        //         document.body.appendChild(wele);
        //         break;
        //     case "B":
        //         let bele = document.createElement("img");
        //         bele.id = "Box" + boxCounter++;
        //         console.log(bele.id);
        //         bele.src = "/images/box.png";
        //         bele.style.width = "25px";
        //         bele.style.height = "25px";
                
        //         console.log(bele);

        //         document.body.appendChild(bele);
        //         break;
        //     case "P":
        //         let pele = document.createElement("img");
        //         pele.id = "Player" + playerCounter++;
        //         console.log(pele.id);
        //         pele.src = "/images/character.png";
        //         pele.style.width = "25px";
        //         pele.style.height = "25px";
                
        //         console.log(pele);

        //         document.body.appendChild(pele);
        //         break;
        // }
    }
}

// function buildMap () {

    
//     for (const row of tileMapSane.mapGrid) {
//         for (const col of row) {
            
//         }
//     }
//   }





//-------------------------------------------------------Attempt of x


    // tileMap01.mapGrid.forEach( element => {
    //     element.forEach( ele => {
    //         console.log(ele);
    //         switch(ele) {
    //             case " ":
    //                 let iele = document.createElement("img");
    //                 iele.id = "emptyImg" + counter++;
    //                 console.log(iele.id);
    //                 iele.src = "/images/tile1.png";
                    
    //                 console.log(iele);

    //                 document.body.appendChild(iele);

    //             case "W":
    //                 let wele = document.createElement("img");
    //                 wele.id = "Wall" + counter++;
    //                 console.log(wele.id);
    //                 wele.src = "/images/wall.png";
                    
    //                 console.log(wele);

    //                 document.body.appendChild(wele);
    //             case "B":
    //                 let bele = document.createElement("img");
    //                 bele.id = "Box" + counter++;
    //                 console.log(bele.id);
    //                 bele.src = "/images/box.png";
                    
    //                 console.log(bele);

    //                 document.body.appendChild(bele);
    //             case "P":
    //                 let pele = document.createElement("img");
    //                 pele.id = "Player" + counter++;
    //                 console.log(pele.id);
    //                 pele.src = "/images/character.png";
                    
    //                 console.log(pele);

    //                 document.body.appendChild(pele);
    //         }
    //     })
    // });

//-------------------------------------------------------Attempt of x



    // var printArray = function(arr) {
    //     if ( typeof(arr) == "object") {
    //         for (var i = 0; i < arr.length; i++) {
    //             printArray(arr[i]);
    //             if (arr[i] == ' '){
    //                 let div = document.createElement('div');
    //                 div.id = "emptyTileDiv";
    //                 document.body.appendChild(div);

    //                 let iele = document.createElement(img);
    //                 iele.id = "emptyTileId";
    //                 div.appendChild(iele);
                    
    //                 iele.src = "/images/tile1.png";
    //                 iele.id = "emptyTile";

    //             } else if (arr[i] == 'W'){
    //                 let div = document.createElement('div');
    //                 board.appendChild(document.createElement('td'));
    //                 let test = board.appendChild(document.createElement('img'));
    //                 test.src = "/images/wall.png";
    //                 test.id = "wallTile";
    //             } else if (arr[i] == 'B'){
    //                 let div = document.createElement('div');
    //                 board.appendChild(document.createElement('td'));
    //                 let test = board.appendChild(document.createElement('img'));
    //                 test.src = "/images/box.png";
    //                 test.id = "boxTile";
    //             } else if (arr[i] == 'P'){
    //                 let div = document.createElement('div');
    //                 board.appendChild(document.createElement('td'));
    //                 let test = board.appendChild(document.createElement('img'));
    //                 test.src = "/images/character.png";
    //                 test.id = "playerTile";
    //             } 
    //         }
    //     }
    //     else document.write(arr);
    // }
    
    // printArray(tileMap01.mapGrid);
    
    
    
    
    
    // const logArrayElements = (element) => {
    //     console.log(`${element}`);
    //     // if(element === "W"){ // TRIGGERS EVERY ROW.
    //     //     console.log("ABABABABA");
    //     // }
    //   };

    // tileMap01.mapGrid.forEach(logArrayElements);

//-------------------------------------------------------Attempt of x

    // const checkTheMap = (element) =>
    // {
    //     if (element == ' '){
    //         let main = document.getElementById('board');
    //         let div = document.createElement('div');
    //         main.appendChild(div);
    //         let image = document.createElement(img);
    //         div.appendChild(image);
    //         image.src = "/images/tile1.png";
    //         image.id = "emptyTile";
    //     }
    // };

    // tileMap01.mapGrid.forEach(checkTheMap);
//-------------------------------------------------------Attempt of x
    // tileMap01.mapGrid.forEach( element => 
    //     {
    //     if (element == ' '){
    //         let div = document.createElement('div');
    //         board.appendChild(document.createElement(td));
    //         let test = board.appendChild(document.createElement(img));
    //         console.log(test);
    //         test.src = "/images/tile1.png";
    //         test.id = "emptyTile";
    //     } else if (element == 'W'){
    //         let div = document.createElement('div');
    //         board.appendChild(document.createElement(td));
    //         let test = board.appendChild(document.createElement(img));
    //         test.src = "/images/wall.png";
    //         test.id = "wallTile";
    //     } else if (element == 'B'){
    //         let div = document.createElement('div');
    //         board.appendChild(document.createElement(td));
    //         let test = board.appendChild(document.createElement(img));
    //         test.src = "/images/box.png";
    //         test.id = "boxTile";
    //     } else if (element == 'P'){
    //         let div = document.createElement('div');
    //         board.appendChild(document.createElement(td));
    //         let test = board.appendChild(document.createElement(img));
    //         test.src = "/images/character.png";
    //         test.id = "playerTile";
    //     } 
    // });

//-------------------------------------------------------Attempt of x

    // for (let i = 0; i < tileMap01.height; i++){
    //     console.log("i: " + i);
    //     for (let j = 0; j < tileMap01.width; j++){
    //         console.log("j: " + j);
    //         console.log("i+j: " + (i*j));
    //         if (tileMap01[i+j] == ' '){
    //             let div = document.createElement('div');
    //             board.appendChild(document.createElement(td));
    //             let test = board.appendChild(document.createElement(img));
    //             test.src = "/images/tile1.png";
    //             test.id = "emptyTile";
    //         } else if (tileMap01[i+j] == 'W'){
    //             let div = document.createElement('div');
    //             board.appendChild(document.createElement(td));
    //             let test = board.appendChild(document.createElement(img));
    //             test.src = "/images/wall.png";
    //             test.id = "wallTile";
    //         } else if (tileMap01[i+j] == 'B'){
    //             let div = document.createElement('div');
    //             board.appendChild(document.createElement(td));
    //             let test = board.appendChild(document.createElement(img));
    //             test.src = "/images/box.png";
    //             test.id = "boxTile";
    //         } else if (tileMap01[i+j] == 'P'){
    //             let div = document.createElement('div');
    //             board.appendChild(document.createElement(td));
    //             let test = board.appendChild(document.createElement(img));
    //             test.src = "/images/character.png";
    //             test.id = "playerTile";
    //         } 
    //     }
    // }

    //-------------------------------------------------------Attempt of x

    // const aRow = tileMap01.mapGrid.width;
    // const aCol = tileMap01.mapGrid.height;
    // let text = "<table><tr>";
    // for (let i = 0; i < aRow; i++) {
    //   text += "<td>" + tileMap01.mapGrid[i] + "</td>";
    //   for (let j = 0; j < aCol; j++) {
    //     text += "<tr>" + tileMap01.mapGrid[i] + "</tr>";
    //   }
    // }
    // text += "</tr></table>";
//-------------------------------------------------------Attempt of x
    // for (const element of tileMap01.mapGrid) {
    //     if (element == ' ') {
    //         var img = document.createElement('img');
    //         img.src = '/images/tile1.png';
    //         document.getElementById('WorldMap').appendChild(img);
    //     } else if (element == 'W'){
    //         var img = document.createElement('img');
    //         img.src = '/images/wall.png';
    //         document.getElementById('WorldMap').appendChild(img);
    //     }
    // }
};