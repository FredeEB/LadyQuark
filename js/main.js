let mohr = [];

function setup() {
  let c = createCanvas(630, 630);
  c.id("squares");

  clear();


  for (var i = 0; i < 3; i++) {
    mohr[i] = [];
    for (var j = 0; j < 3; j++) {
      mohr[i][j] = new mohrSquare (i * 210, j* 210, 5, 200, 20);
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
