class Dustbin{
    constructor(bodyA, bodyB){
        var options = {
            is static:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
            }
        }
        this.Dustbin = Constraint.create(options);
        World.add(world, this.chain);
    
   display(){
        strokeWeight(4);
        var pointA = this.Dustbin.bodyA.position;
        var pointB = this.Dustbin.bodyB.position;
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }

