class StretchCircles{
    constructor(mouseY){
      this.mouseY = _mouseY;
    }
    display(){
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
  
  
  
  