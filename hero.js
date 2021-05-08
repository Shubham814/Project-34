class heroClass{
    constructor(x,y,width,height){
        var options={
            'isStatic': false,
            'frictionAir': 0.3,
        }
        this.w = width;
        this.h = height;
        this.y = y;
        this.x = x;
        this.body = Bodies.rectangle(this.x,this.y,this.w,this.h,options);
        this.image = loadImage("Superhero-02.png");
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill(255);
        image(this.image,0,0,this.w,this.h);
        pop();
    }
}