class Roof{
	constructor(x,y,width,height){
	var options={
	isStatic:true,
	friction:1,
	density:1.2
		}
	this.x=x;
	this.y=y;
    this.width=width;
    this.height=height;
	this.body=Bodies.rectangle(this.x, this.y,this.width,this.height,options)
	World.add(world, this.body);
	}
	
	display()
	{
			var pos=this.body.position;		
			push()
			//translate(pos.x,pos.y);
			rectMode(CENTER)
			// rotate(this.body.angle)
			fill(255,0,255)
            rect(pos.x,pos.y,this.width,this.height);
			pop()
			
	}

}