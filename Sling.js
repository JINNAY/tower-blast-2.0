class Sling{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB;
        this.shot = Constraint.create(options);
        World.add(world, this.shot);
    }

    fly(){

    this.shot.bodyA = null;    
    }

    attach(body){
      this.sling.bodyA = body;
  }

    display(){
      if(this.shot.bodyA){  
        var pointA = this.shot.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
      }
    }
    
}