

function action(){
	//Steuerung linke Spielfigur
	if(input.right){
		dir1=true;
		if (x1+2>=width-42){
		x1=width-42;	
		}else{
		x1+=2;
		}
	}
	
	if (input.left){
		dir1=false;
		if (x1-2<=2){
		x1= 2;
		}else{
		x1-=2;	
		}
		
	}
	if (input.up){
		if(!jumped1){
			speedY1=24;
			jumped1=true;
			increase1=true;
		}	
	}
	
	if (jumped1){
		if (increase1){
			if (speedY1==0){
				increase1=false;
			}
			else{
			y1-=speedY1;
			speedY1--;
			}	
		}else if ((y1 + speedY1) >= (height -81)){
			y1 = height-81;
			jumped1 = false;
			speedY1 = 0;
		}else {
			y1+=speedY1;
			speedY1++;
		}	
	}
	
	if(input.down){
				
	}
	if(input.space){
		if(!shoot1){	
			shoot1=true;
			direction1=dir1;
			sx1 = x1+35;
			sy1 = y1+15;
		}
	}
	
	//Steuerung rechte Spielfigur
	if(input.d){
		dir2=true;
		if (x2+2>=width-42){
		x2=width-42;	
		}else{
		x2+=2;
		}
	}
	
	if (input.a){
		dir2=false;
		if (x2-2<=2){
		x2= 2;
		}else{
		x2-=2;	
		}
		
	}
	if (input.w){
		if(!jumped2){
			speedY2=24;
			jumped2=true;
			increase2=true;
		}	
	}
	
	if (jumped2){
		if (increase2){
			if (speedY2==0){
				increase2=false;
			}
			else{
			y2-=speedY2;
			speedY2--;
			}	
		}else if ((y2 + speedY2) >= (height -81)){
			y2 = height-81;
			jumped2 = false;
			speedY2 = 0;
		}else {
			y2+=speedY2;
			speedY2++;
		}	
	}
	
	if(input.s){
				
	}
	
	if(input.eins){
		if(!shoot2){	
			shoot2=true;
			direction2=dir2;
			sx2 = x2+35;
			sy2 = y2+15;
		}	
	}
	
	

}
