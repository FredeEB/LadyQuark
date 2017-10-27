class mohrSquare {

  constructor(x, y, def, scl) {
    this.x = x;
    this.y = y;
    //side subdevision
    this.def = def;
    //side length
    this.scl = scl;
    //has make() been run
    this.made = false;
    //for calculating the inner squares
    this.coords = [];
    this.sub = 10;
  }

  //makes the coordinates of the mohr square
  make() {
    //used for randomizing normal axis
    let mod = []
    //outer for loop defines the number of inner squares
    for (var i = 0; i < this.sub*4; i++) {
      mod[i] = random(10)
    }
    //inner for loop defines the coordinates of each point on the perimeter of each square and their inner squares
    for(let k = 0; k < this.sub; k++){
    this.coords[k] = [];
    let j = 0;

    //makes the top side
    for (let i = 0; i <= this.def; i++) {
      this.coords[k][j] = new p5.Vector(this.x + i * this.scl / this.def, this.y + k*mod[j]);
      j++;
    }

    //makes the right side
    for (let i = 0; i <= this.def; i++) {
      this.coords[k][j] = new p5.Vector(this.x - k*mod[j] + this.scl, this.y +i * this.scl / this.def);
      j++;
    }

    //makes the bottom
    for (let i = this.def; i >= 0; i--) {
      this.coords[k][j] = new p5.Vector(this.x + i * this.scl / this.def, this.y - k*mod[j] + this.scl);
      j++;
    }

    //makes the left side
    for (let i = this.def; i >= 0; i--) {
      this.coords[k][j] = new p5.Vector(this.x + k*mod[j], this.y + i * this.scl / this.def);
      j++;
    }
  }
    this.made = true;
  }

  display() {
    stroke(0);
    fill(0,0,0,0)
    //if make() hasn't been run, run it
    if (!this.made) {
      this.make();
    }
    //outer for loop displays each square and their inner square
    for (var j = 0; j < this.coords.length; j++) {
      //inner for loop displays each point on the indivisual squares
      beginShape();
      for (let i = 0; i < this.coords[0].length; i++) {
        vertex(this.coords[j][i].x, this.coords[j][i].y);
      }
      endShape(CLOSE);
    }
  }
}
