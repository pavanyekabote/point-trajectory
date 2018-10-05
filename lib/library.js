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


//Move point in Square
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

//Move point in circle
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


//Draw Parabola
class Parabola{

    constructor(cX, cY){
        
        this.cX = cX;
        this.cY = cY;
        this.x = 0;
        this.y = 0;
        this.point = new mPoint(this.cX+this.x, this.cY-this.y);
        this.g = 1;
        this.v= 0;
        this.stage = 0;
        this.times = 0;
    }

    draw()
    {
        this.point.draw();
    }

    move()
    {
        var slope = 0.005;
        
        if(this.stage == 1)
        {
            //this.x = this.cX;
            //this.v = this.g;
            this.x = this.v;
            this.v -=this.g;
            this.x += this.v;


        }

        if(this.stage == 0)
        {
            this.v += this.g;
            this.x = this.v;
        }
        
        this.y = (slope*Math.pow(this.x,2));
        
        if(this.cY+this.y >= height || this.x+this.cX>=width){
            if(this.times==0){
                this.stage=1;
                this.times +=1;
            }
            else if(this.times ==1 )
            {
                this.times =2;
            }
        }



        this.point.move(this.cX+(this.x ), this.cY + this.y);
    }

}