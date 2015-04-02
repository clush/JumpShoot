function Spielfigur(x,y,speed,blickrichtung,color,playerheight,playerwidth){
this.x=x;
this.y=y-playerheight;
this.speed=speed;
this.jumpSpeed=0;
this.blickrichtung = blickrichtung; // true = schaut zu Beginn nach rechts 
this.color=color;
this.playerheight=playerheight;
this.playerwidth=playerwidth;

this.jumped=false;
this.increase=false;
this.shooting=false;

this.kugelCount=0;
this.kugelAnzahl=3;
this.kugel= new kugel(this.color);


this.moveLeft = function(){

	this.blickrichtung=false;

	if (this.x-this.speed<=2){
		this.x=2;
	}else{
		this.x-=this.speed;
	}
}

this.moveRight = function(){
	
	this.blickrichtung=true;
	
	if (this.x+this.speed>=(width-(this.playerwidth+2))){
		this.x=width-(this.playerwidth+2);
	}else{
		this.x+=this.speed;
	}
}

this.jump = function(){
	
		if (this.increase){
			if(this.jumpSpeed==0){
				this.increase=false;
			}else{
				this.y-=this.jumpSpeed;
				this.jumpSpeed--;				
			}
		}else if ((this.y + this.jumpSpeed) >= (height-(this.playerheight+41))){
			this.y = height-(this.playerheight+41);
			this.jumped=false;
			this.jumpSpeed=0;
		}else{
			this.y+=this.jumpSpeed;
			this.jumpSpeed++;
		}
}

this.shoot = function(){
				
		this.kugel.fly();
}

this.draw = function() {
	ctx.fillStyle =this.color;
	ctx.fillRect(this.x,this.y, this.playerwidth,this.playerheight);
}

}

