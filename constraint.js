class Chain  {
    constructor(body1,body2){
        var option = {
            bodyA : body1,
            bodyB : body2 ,
            stiffness:0.05,
            length:50
        }
        this.chain = Constraint.create(option);  
        World.add(world,this.chain);
        }

    display(){
        var pointA=this.chain.bodyA.position;
        var pointB=this.chain.bodyB.position
        strokeWeight(5)
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }    
}
