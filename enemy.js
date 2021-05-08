class enemyClass{
    constructor(x,y,width,height){
        var options={
            'isStatic': false,
            'friction': 1,
        }
        this.w = width;
        this.h = height;
        this.y = y;
        this.x = x;
        this.body = Bodies.rectangle(this.x,this.y,this.w,this.h,options);
        this.active = loadImage("Monster-01.png");
        this.dead = loadImage("Monster-02.png");
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        fill(255);
        image(this.active,0,0,this.w,this.h);
        pop();
    }

}