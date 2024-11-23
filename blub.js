class blub {
  constructor() {
    let colors = [[7, 110, 245], [47, 247, 231], [131, 102, 237]]
    this.pos = createVector(random()*width, random()*height);
    this.size = 1;
    this.grow = true
    //this.color = [random(255), random(255), random(255)];
    this.color = random(colors);
  }
  update(other){
    
    for(let i=0; i<other.length; i++){
      if(this != other[i] && this.size+other[i].size >= this.pos.dist(other[i].pos)*2){
        this.pos.y -= 0.2;
        this.grow = false;
      }
      if(other[i].pos.y < -50) {
        other.splice(i, 1);
      }
    }
    if(this.grow) {
      this.size += 0.5;
    }
    
  }
  show(){
    fill(this.color);
    circle(this.pos.x, this.pos.y, this.size);
  }
}