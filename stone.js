class Stone{
	constructor(x,y,width, height)
	{
	var options = {
		restitution:0.8,
		friction:0.9,
		density:12
	}
		this.x=x;
		this.y=y;
		this.body=Bodies.rectangle(x,y,width,height,options)
		World.add(world, this.body);
		this.width = width;
		this.height = height; 
	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			rect(pos.x,pos.y,this.width,this.height);

			pop()
	}

}