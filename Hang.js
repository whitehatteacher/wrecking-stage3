class Hang {
    constructor(bodyA, pointB) {
      var options = {
        bodyA: bodyA,
        pointB: pointB,
        stiffness: 1.2,
        length: 250,
      };
  
      this.pointB = pointB;
      this.hang = Constraint.create(options);
      World.add(world, this.hang);
    }
    attach(body) {
      this.hang.bodyA = body;
    }
  
    fly() {
      this.hang.bodyA = null;
    }
  
    display() {
      if (this.hang.bodyA) {
        var pointA = this.hang.bodyA.position;
        var pointB = this.pointB;
        push();
  
        stroke(48, 22, 8);
        strokeWeight(3);
  
        line(pointB.x, pointB.y, pointA.x, pointA.y);
  
        pop();
      }
    }
  }
  