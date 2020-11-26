class Sling
{
  constructor(bodyA,bodyB,offsetX,offsetY){
      var options={
          bodyA: bodyA,
          bodyB: bodyB,
          pointB:{x:offsetX,y:offsetY},
          
      }
          this.sling=Constraint.create(options);
          World.add(world,this.sling);
          this.offsetX=offsetX;
          this.offsetY=offsetY;

  }

      display(){
        
              var posA=this.sling.bodyA.position;
              var posB=this.sling.bodyB.position;

              strokeWeight(2);
               line(posA.x,posA.y,posB.x+this.offsetX,posB.y);
         
      }

 
}
