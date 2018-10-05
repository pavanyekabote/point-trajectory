
class Particle
{
	constructor(x,y)
	{
		this.pos = createVector(x,y);
		this.v = createVector(0,0);
		this.g = createVector();
		this.prev = createVector(x,y);
		this.weight = 1;//random(500);
		this.rgb = [random(255), random(255), random(255)];
	}

	update()
	{
		this.v.add(this.g );
		this.v.limit(5);
		this.pos.add(this.v );
		this.g.mult(0);
		
	}

	show()
	{
		//stroke(this.rgb[0], this.rgb[1], this.rgb[2], 200);
		stroke(255, 100);
		strokeWeight(3);
		//point(this.pos.x,this.pos.y);
		line(this.pos.x, this.pos.y, this.prev.x, this.prev.y);
		this.prev.x = this.pos.x;
		this.prev.y = this.pos.y;
	}

	attracted(target)
	{
		var force = p5.Vector.sub(target, this.pos);
		var d = force.mag();
		
		var dsquared = constrain(d, 1, 25);
		var G = 50;//6.67408;
		var strength = G/ dsquared;
		force.setMag(strength * this.weight);
		if(d<25)
			force.mult(-10);
		this.g.add(force);
	}

}

var attractors;
var particles;

var p, mX,mY;
function setup()
{
	createCanvas(600,600);
	mX = width/2;
	mY = height/2;
	 particles = [];
	attractors =[];
	for(var i=0; i<1500; i++){
		particles.push(new Particle( random(width),random(height-100)));
	}
	// for(var i=0; i<1; i++){
	// 	attractors.push(createVector(random(width), random(height)));
	// }
	background("#222");
	
}

function draw()
{

	background("#222");
	stroke(10,255,10,255);
	strokeWeight(8);
	for(var i =0; i<attractors.length; i++){
		var attractor = attractors[i];
		point(attractor.x, attractor.y);
	}


	for(var i =0; i<particles.length; i++){
		
		for(var j=0;j < attractors.length; j++)
			 particles[i].attracted(attractors[j]);
		 particles[i].show();
		 particles[i].update();
		
	}

	fill(57, 255, 20);
	strokeWeight(0);
	text("Particles under Gravitational force of attracting bodies 	\nDeveloped by Pavan Yekabote :)", width/2 - 125, height - 75);
}


function mouseClicked(e)
{
	attractors.push(createVector(e.x, e.y)); 
	//backgrou	nd("#222");

}