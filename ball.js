class Ball{
    constructor(x,y){
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body=Bodies.circle(x,y,20);
        World.add(world,this.body);
    }
    display(){
        var x=this.body.position.x;
        var y=this.body.position.y;
    }
}