

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
        Spieler1.kugel.init(true);
        Spieler1.shooting=true;
        sound();
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
        Spieler2.kugel.init(false);
        Spieler2.shooting=true;
        sound();
	}
	
	if(Spieler2.shooting){
		Spieler2.shoot();
	}
	
}
