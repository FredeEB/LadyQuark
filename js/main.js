let mohr = [];

function setup() {
  let c = createCanvas(930, 930);
  c.id("squares");

  clear();


  for (var i = 0; i < 3; i++) {
    mohr[i] = [];
    for (var j = 0; j < 3; j++) {
      mohr[i][j] = new mohrSquare (i * 310, j* 310, 4, 300, 20);
    }
  }
  for (var i = 0; i < mohr[0].length; i++) {
    for (var j = 0; j < mohr.length; j++) {
      mohr[j][i].display()
    }
  }
}

function windowResized(){
  c.size(windowWidth,windowHeight)
}
