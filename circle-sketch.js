class mPoint{
    constructor(x,y)
    {
        this.x = x;
        this.y = y;
        this.r = 10;
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

function pointsDistance(p1,p2){
    return Math.sqrt((p1.x-p2.x) * (p1.x-p2.x) + (p1.y-p2.y) * (p1.y-p2.y));
}

var mW,mH, cW, cH;
var p ,run=true, cP,mx,my;
var cD = new Date();
var x,y, nDegrees, deg=1;
function setup() {
    createCanvas(600,500);
    mW = width;
    mH = height;
    cW = mW/2;
    cH = mH/2;
    nDegrees = 360;
    p = new mPoint(cW, cH);
    cP = new mPoint(cW, cH);

}


function draw() {
    if(frameCount % 1 == 0 && run)
    {
        var nD = new Date();
        //if(nD - cD >= 1000)
        {
            background(0);
            fill(255);
            //p.draw();
            //Move in circular form
            var rD = 50;
            deg= second() / 10 ;
            x = Math.round( Math.cos(deg) * rD ) ;
            y = Math.round( Math.sin(deg) * rD ) ;
            var d = Math.round(pointsDistance(p,cP));
            text("Distance: "+d +" > degrees: "+deg+"  x:"+x+" y:"+y, 20,20);
            stroke(255);

            mx = cW-y;
            my = cH-x;
            line(cP.x, cP.y, mx, my);
            text(Math.round(deg%12+1), mx -5 , my-5);
        //    deg += ( 2 * 3.14 * rD * deg / 360 )  ;
            // if(deg == 60)
            //     deg = 1;
            p.move(mx, my);
            cP.draw();
            cD = nD;
        }


    }
}


function keyPressed(e){
    if(e.keyCode == 65)
      run = !run;
}
