// F = MA


// F = M * 9.8m/s*s


//Draw Parabola


var p, mX,mY;
function setup()
{
	createCanvas(600,600);
	mX = width/2;
	mY = height/2;
	p = new Parabola(mX, mY);
	background(0);

}

function draw()
{
	background(0);
	fill("#00FF00")
	text("Working with => y = a ( x^2 ) ",width/2-75, height-250);
	fill(255);
	 stroke(0);
	 strokeWeight(2);
	 text("Make point move in Parabolic path...\n\nDeveloped by Pavan Yekabote :-)", width/2 - 75,  200);
	//if(frameCount%10 == 9)
	{
		stroke(255);
		strokeWeight(0);
		fill("#00FF00");
		p.move();
		p.draw();
	}
}
