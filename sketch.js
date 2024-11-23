let B = [];
let n = 200;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for(let i=0; i<n; i++) {
    B.push(new blub());
  }
  strokeWeight(0);
}

function draw() {
  background(0,0,255);
  for(let i=0; i<B.length; i++) {
    B[i].show();
    B[i].update(B);
    if(B[i].pos.y < -40) {
      B.splice(i,1);
    }
  }
  
  
  if(frameCount%10 == 0) {
    B.push(new blub());
    B.push(new blub());
    B.push(new blub());
    B.push(new blub());
    
  }  
}