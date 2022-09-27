//GLOBALS
let mic;
let count = 0
let x = 400;
let y = 400;
// let dT1;
let dT=[];
let mD1;
let spinC1;
let stretchC1;

function setup() {
  let cnv = createCanvas(800, 800);
  cnv.mousePressed(userStartAudio);
  mic = new p5.AudioIn();
  mic.start();
  for(let i = 0; i <= 3; i++){
  dT[i] = new DressTri(random(width));
  }
  // mD1 = new MouthDiamond();
  spinC1 = new SpinCircle();
  // stretchC1 = new StretchCircles();
 
} 

function draw(){
  
  if (count<360){
    count++
  }else if(count==360)(count=0);
  
  background(50,165,170);
  //a teal background for the base of the avatar
  
  line(x, y*0, x, y*2);
  //throughline

  for(let i = 0; i <= 3; i++){
  dT[i].display();
  dT[i].move();
  }
  // dT= DressTri array -- random x plane B&W triangle
  stretchCircles();
  // stretchC1.display();
  //circles on median line for appeal
  
  spinC1.display();
  //spinning circles, WIP
  
  mouthDiamond();
  //mic input reactive diamond

  wipMouseTracker(); 
  // work in progress point finder mouse. Pink for visibility

myMap = map(mic.getLevel(), 0, 0.5, 0, 20)

}

function stretchCircles(){
  stroke(0)
  fill (51)
  ellipse(x, 0, mouseY, y*.15);
  fill(240)
  ellipse(x, y*.25, y*.1, mouseY);
  
  fill(51)
  ellipse(x, y*2, mouseY, y*0.14);
 
  fill(240)
  ellipse(x, y*1.75, y*.1, mouseY);
  //scaling complete
} 
function mouthDiamond(){
  micLevel = mic.getLevel();
  let maxPointX = x*0.25 - micLevel * width;
  let maxPointXb = x*1.75 - micLevel * width;
  noStroke()
  fill(51)
  triangle(maxPointX, y, x, y*0.42, x, y*1.57)
  fill(51)
  triangle(maxPointXb, y, x, y*0.42, x,y*1.57)
  //scaling complete, mic input all green!
   
}
function wipMouseTracker(){
  stroke(0);
  fill(242, 126, 184);
    text("(" + mouseX + ", " + mouseY + ")", mouseX, mouseY);

  //Pink mouse point tracker for work in progress
 
}