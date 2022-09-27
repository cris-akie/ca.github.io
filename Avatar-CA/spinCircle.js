class SpinCircle{
    constructor(_rot){
      this.rot = _rot;
    }
    display(){
      push();
      rotate(count);
      fill(51)
      ellipse(x, y*.38, x*0.06, y*0.06);
      fill(51)
      ellipse(x, y*1.63, x*0.06, y*0.06);
      pop();
    }
    
    
    
  }
  
  
  // function spinCircle(rot){
  //   push();
  //   rotate(count);
  //     fill(51)
  //     ellipse(x, y*.38, x*0.06, y*0.06);
  //     fill(51)
  //     ellipse(x, y*1.63, x*0.06, y*0.06);
  //   pop();