let mohr = [];

function setup() {
  let c = createCanvas(4*windowWidth/5, windowHeight-70);
  c.position(windowWidth/5,70);
  clear();


  for (var i = 0; i < 3; i++) {
    mohr[i] = [];
    for (var j = 0; j < 3; j++) {
      mohr[i][j] = new mohrSquare (i*windowWidth/4.3, j*(windowHeight-100)/3, 7, 200);
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
