

class mPoint{
    constructor(x,y)
    {
        this.x = x;
        this.y = y;
        this.r = 8  ;
    }

    move(x,y)
    {
        this.x =x;
        this.y = y;
    }

    draw(){
        ellipse(this.x, this.y, this.r, this.r);
    }
}



class Square{

    constructor(cX, cY,s){

        this.cX = cX;
        this.cY = cY;
        this.stage = 1;
        this.point = new mPoint(cX, cY);
        this.x = cX;
        this.y = cY;
        this.s = s;
        this.v = 0;
        this.g = 0.01;
    }


    setCenter(x,y)
    {
        this.cX = x-(this.s/2);
        this.cY = y-(this.s/2);
    }

    draw(){

        this.point.draw();
    }

    move()
    {

        this.point.move(this.x, this.y);
        this.v += this.g;
        if(this.stage == 1)
        {


            this.x+=this.v;
            if(this.x >= (this.cX) + this.s ){
                this.x=(this.cX)+this.s;
                this.stage = 2;
            }

        }
        if(this.stage == 2)
        {

            this.y += this.v;
            if( this.y >= this.cY + this.s ){
                this.y = this.cY + this.s;
                this.stage = 3;
            }
        }
        if(this.stage == 3)
        {

            this.x -= this.v;
            if( this.x <= this.cX ){
                this.x = this.cX;
                this.stage = 4;
            }
        }
        if(this.stage == 4)
        {

            this.y -= this.v;
            if(this.y <= this.cY){
                this.y = this.cY;
                this.stage = 1;
            }
        }


    }


}


class Circle
{

    constructor(cx, cy, r, d)
    {
        this.cX = cx;
        this.cY = cy;
        this.x = cx;
        this.y = cy;
        this.r = r;
        this.delta = d;
        this.point = new mPoint(cx,cy);
        this.g = 0.005;
        this.count = 0;
        this.v = 0;
        this.deg = 0;
    }


    setCenter(x,y)
    {
        this.cX = x;
        this.cY = y;
    }

    move()
    {

        this.v += this.g;
        this.deg=( this.count++ / 500 ) * this.v ;
        this.x = Math.round( Math.cos(this.deg *  this.delta ) * this.r /  this.delta )  ;
        this.y = Math.round( Math.sin(this.deg *  this.delta ) * this.r / this.delta ) ;

        fill(255);

        var mx = this.cX+ this.y;
        var my = this.cY+ this.x;

        this.point.move(mx, my);

    }

    draw()
    {
        this.point.draw();
    }
}


function pointsDistance(p1,p2){
    return Math.sqrt((p1.x-p2.x) * (p1.x-p2.x) + (p1.y-p2.y) * (p1.y-p2.y));
}

var  cW, cH, run=true;

var sq, rD=50, cir;

function setup() {
    createCanvas(600,600);
    mW = width;
    mH = height;
    cW = mW/2;
    cH = mH/2;

    //Initialize Shapes
    sq = new Square(cW-rD, cH - rD,  rD * 2);
    cir = new Circle(cW, cH, rD );
    circles = [];
    background(0);

    var nCircles = 9;
    for(let i=0 ; i< nCircles; i++)
        circles.push(new Circle(cH, cW, rD,  i  * (2 * Math.PI * rD / nCircles) / 150 ) );
}




/**
 Author : Pavan Yekabote;

*/
function draw() {
    if(frameCount % 1 == 0 && run)
    {


//              background(0);

        for(let c =0 ; c < circles.length; c++ )
        {
//            fill(rand(255), rand(255), rand(255));
            fill(255);
            circles[c].draw();
            circles[c].move();
        }

        //For Circle
        // cir.draw();
        // cir.move();

        //For Square
        // sq.draw();
        // sq.move();
    }
}

function mouseMoved(e)
{
    text(e.x+" -- "+e.y, 20, 50);
    cir.setCenter(e.x, e.y);
    sq.setCenter(e.x, e.y);
    for(let i=0; i< circles.length; i++)
    circles[i].setCenter(e.x, e.y);
    background(0);
}

function keyPressed(e){
    if(e.keyCode == 65)
    run = !run;
}



function rand(limit)
{
    var nCount = String(limit).length;
    return Math.floor(Math.random()*Math.pow(10,nCount)) % limit;
}
