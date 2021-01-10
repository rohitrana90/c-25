class Paper{

  constructor(x,y,radius){
   var options={
  isStatic:false,
  restitution:0.3,
  friction:1.2,
  density:1.2,

 }
this.body=Bodies.circle(200,400,2,options)
this.body=loadImage('paper.png')
World.add(world,this.body)

 }
display(){
    image(this.body)
    ellipseMode(RADIUS);
    ellipse(this.body.position.x, this.body.position.y, 20, 20);




}








 }









