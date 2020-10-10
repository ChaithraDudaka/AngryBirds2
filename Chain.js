 class Chain{
    constructor(a,b){
        var options = {
        bodyA : a,
        bodyB : b,
        stiffness: 0.04,
        length : 100,
        }
      this.chain=Constraint.create(options)
      World.add(world,this.chain);
    }
     display (){
         var pointA = bird.body.position;
         var pointB = log6.body.position;
        strokeWeight(4);
        line(pointA.x,pointA.y,pointB.x,pointB.y);    

     }
 }