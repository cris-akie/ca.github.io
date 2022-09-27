class DressTri {
    constructor (_xpos){
      this.xpos = _xpos;
    }
    display(){ 
      push();
      translate(this.xpos)
      fill(240)
      triangle(mouseX,y*0.19, x, 0, x*1.5, y*0.19);
      fill(51)
      triangle(mouseX,y*0.18, x, y*0.08, x*1.37, y*0.18);
      fill(240)
      triangle(x*0.5,y*1.81, x, y*2, mouseX, y*1.81);
      fill(51)
      triangle(x*0.62,y*1.82, x, y*1.93,mouseX, y*1.82);
      pop();
      //North & South triangles B/W Triangle
      //scaling complete
      }
     move(){
    
      if(this.xpos<=width * 1.3){
        this.ypos = this.ypos +3 
         } else {
           this.xpos = -width;
         }
   
    }
  }