/*
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

         p.draw();

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
*/