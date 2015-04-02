

function action(){
	
	//Spieler 1
	
	if(input.d){
		Spieler1.moveRight();
	}
	
	if (input.a){
		Spieler1.moveLeft();		
	}
	
	if (input.w){
		if(!Spieler1.jumped){
		Spieler1.jumpSpeed=6*Spieler1.speed;
		Spieler1.jumped=true;
		Spieler1.increase=true;
		}
	}
	
	if(Spieler1.jumped){
		Spieler1.jump();
	}
	
	if(input.shift){
		Spieler1.shooting=true;
		Spieler1.kugel.richtung=Spieler1.blickrichtung;
        if(Spieler1.kugel.richtung)Spieler1.kugel.x=Spieler1.x +Spieler1.playerwidth+1;
        else Spieler1.kugel.x=Spieler1.x -Spieler1.playerwidth+1;
		Spieler1.kugel.y=Spieler1.y+15;
	}
	
	if(Spieler1.shooting){
		Spieler1.shoot();
	}
	
	
	
	
	//Spieler 2
	
	if(input.right){
		Spieler2.moveRight();
	}	
	
	if (input.left){
		Spieler2.moveLeft();		
	}
	
	if (input.up){
		if(!Spieler2.jumped){
		Spieler2.jumpSpeed=6*Spieler1.speed;
		Spieler2.jumped=true;
		Spieler2.increase=true;
		}
	}
	
	if(Spieler2.jumped){
		Spieler2.jump();
	}
	
	if(input.space){
		Spieler2.shooting=true;
		Spieler2.kugel.richtung=Spieler2.blickrichtung;
        if(Spieler2.kugel.richtung)Spieler2.kugel.x=Spieler2.x +Spieler2.playerwidth+1;
        else Spieler2.kugel.x=Spieler2.x -Spieler2.playerwidth+1;
		Spieler2.kugel.y=Spieler2.y +15;
	}
	
	if(Spieler2.shooting){
		Spieler2.shoot();
	}
	
}
