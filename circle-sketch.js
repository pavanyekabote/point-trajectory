class mPoint{
    constructor(x,y)
    {
        this.x = x;
        this.y = y;
        this.r = 50;
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
        this.point = new mPoint(x,y);
        this.x = cX;
        this.y = cY;
        this.s = s;
        this.v = 0;
        this.g = 0.01;
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

    constructor(cx, cy, r)
    {
        this.cX = cx;
        this.cY = cy;
        this.x = cx;
        this.y = cy;
        this.r = r;
        this.point = new mPoint(x,y);
        this.g = 0.1;
        this.count = 0;
        this.v = 0;
        this.deg = 0;
    }


    move()
    {

        this.v += this.g;
        this.deg=( this.count++ / 500 ) * this.v ;
        this.x = Math.round( Math.cos(this.deg) * this.r ) ;
        this.y = Math.round( Math.sin(this.deg) * this.r ) ;

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

var mW,mH, cW, cH;
var p ,run=true, cP,mx,my, gravity=0.1, v=0;
var cD = new Date();
var x,y, nDegrees, deg=1;

var sq, rD=50, cir;

function setup() {
    createCanvas(600,500);
    mW = width;
    mH = height;
    cW = mW/2;
    cH = mH/2;
    nDegrees = 360;
    p = new mPoint(cW, cH);
    cP = new mPoint(cW, cH);
    sq = new Square(cW-rD, cH - rD,  rD * 2);
    cir = new Circle(cW, cH, rD );
    background(0);
}





function draw() {
    if(frameCount % 1 == 0 && run)
    {


        //For Square
        background(0);
        fill(255);
        //sq.draw();
        //sq.move();

        //fill(rand(255), rand(255), rand(255));
        cir.draw();
        cir.move();


        //fill(255);

        /* p.draw();

        //Move in circular form

        v += gravity;
        deg=( frameCount / 500 ) * v ;
        x = Math.round( Math.cos(deg) * rD ) ;
        y = Math.round( Math.sin(deg) * rD ) ;
        var d = Math.round(pointsDistance(p,cP));
        fill(0);
        rect(0,0,700,30);

        fill(255,255,0);
        text("Distance: "+d +" > degrees: "+deg+"  x:"+x+" y:"+y, 20,20);
        stroke(255);

        mx = cW-y;
        my = cH-x;

        p.move(mx, my);
        cP.draw();
        cP.move(cW, cH);
        */


    }
}


function drawSquare(cX, cY, s)
{



}
function mouseMoved(e)
{
  //  text(e.x+" -- "+e.y, 20, 50);
   // cW = e.x;
    //cH = e.y;
    //background(0);
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
