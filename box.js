class Box{
    constructor(x,y,width,height){
    
        var box_options={
            restitution : 1
            
        }
        this.color="red";
        this.box = Bodies.rectangle(x,y,width,height,box_options);
        this.width=width;
        this.height=height;
        World.add (world,this.box);
        }
 
     display_box(){
        var pos =this.box.position;
        var angle = this.box.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill(this.color);
        rect(0, 0, this.width, this.height);
        pop();
        }

}






