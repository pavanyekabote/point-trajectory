
class RoseParticle
{
	constructor(x,y, centDist)
	{
	
		this.r = 100;
		
		this.pos = createVector(width/2- this.r,height/2 -this.r);
		this.angle = 0;
		this.centDist = centDist;
		this.prev = createVector(width/2-this.r,height/2 -this.r);

	}

	draw()
	{
		var r = random(255), g = random(255), b = random(255);
		stroke(255, 200);
		strokeWeight(2);
		point(this.pos.x, this.pos.y);
		
	}

	update()
	{
		this.r;
		this.angle++;

		var x = Math.cos( this.centDist * this.angle - Math.PI/2 ) * Math.cos(this.angle) * this.r;
		var y = Math.cos( this.centDist * this.angle - Math.PI/2) * Math.sin(this.angle) * this.r;
		var vec = createVector(x,y);
		this.pos.add(vec);

		
	}


}

var roses=[];
var centDist = 4;
function setup()
{
	createCanvas(600,600);
	for(var i=0;i < 1; i++)
		roses.push(new RoseParticle(0, 0, centDist));
	background(0);
}

function draw() {
	//background(0);

	for(var i=0; i< roses.length; i++){
		var rose = roses[i];
		
		rose.update();
		rose.draw();
	}
}