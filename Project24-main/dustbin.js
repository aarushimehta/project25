class Dustbin{
    constructor(x,y,width,height){
     var options={
     isStatic : true
     }
     this.image = loadImage("dustbin.png");
     this.body=Bodies.rectangle(x,y,width,height,options)
     this.width=width;
     this.height=height;
     World.add(world,this.body)
}
display(){
    var position=this.body.position;
    push();
    translate(position.x, position.y);
    imageMode(CENTER);
    image(this.image, 0,0,this.width, this.height*8);
    pop();
    
}


}