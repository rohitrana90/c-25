class Dustbin {
    
    constructor(x,y,width,height){
        var option = {
     isStatic:true,
     
        }
    
       this.body = Bodies.rectangle(x,y,width,height,option)
       this.width = width;
       this.height = height;
       this.body=loadImage('dustbingreen.png')
      World.add(world,this.body)
        
     }
    
       display(){
   
      var pos = this.body.position
      image(this.body,590,653);
      rectMode(CENTER)
     fill("white")
    
     rect(pos.x,pos.y,this.width,this.height)
    


     
    
     }
    
    }
    
    
