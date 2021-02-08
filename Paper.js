class Paper {
    constructor(x, y, radius){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.2,
            'isStatic':false
        }
        this.radius = radius
        this.body = Bodies.circle(x, y, radius, options);
        this.paperImg=loadImage("sprites/paper.png")
        World.add(world, this.body);

    }
    display(){
        fill("red");
        push();
        ellipseMode(RADIUS);
        ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius);
        image(this.paperImg,0,0,100,100)
        pop();
    }
}