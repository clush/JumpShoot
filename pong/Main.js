
Canvas = document.getElementById("Pong");
ctx = Canvas.getContext("2d");

width= 800;
height= 500;
speedX=4;
bulletspeed=10;

x1=40;
y1=height-81;
speedY1=0;
jumped1=false;
increase1=false;
shoot1=false;
sx1=x1;
sy1=y1;
dir1=true;
direction1=true;
timer1=0;

x2=width-80;
y2=height-81;
speedY2=0;
jumped2=false;
increase2=false;
shoot2=false;
sx2=x2;
sy2=y2;
dir2=false;
direction2=false;
timer2=0;



setInterval(main, 1000/60); //Refreshzyklus

function main(){
	clear();	
	action();	
	draw();
	
}


