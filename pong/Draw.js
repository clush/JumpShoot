function draw () {
	ctx.fillStyle ="#0000ff";
	ctx.fillRect(x1,y1, 40, 40);	
	
	ctx.fillStyle ="#0000ff";
	ctx.fillRect(x2,y2, 40, 40);
	
	
	if (shoot1){
	if(timer1<96){
		timer1++;
		if (direction1){
			sx1+=bulletspeed;	
		}else{
			sx1-=bulletspeed;
		}	
		ctx.fillStyle ="#0000ff";
		ctx.fillRect(sx1,sy1, 5, 5);
	}else{
		shoot1=false;
		timer1=0;
	}
	}
	
	
	if (shoot2){
	if(timer2<100){
		timer2++;
		if (direction2){
			sx2+=bulletspeed;	
		}else{
			sx2-=bulletspeed;
		}	
		ctx.fillStyle ="#0000ff";
		ctx.fillRect(sx2,sy2, 5, 5);
	}else{
		shoot2=false;
		timer2=0;
	}
	}

}

function clear(){
	ctx.fillStyle = "#000000";
	ctx.fillRect(0,0,width,height);
	
	ctx.fillStyle = "#ff0000";
	ctx.fillRect(0,height-40,width,40);

}
