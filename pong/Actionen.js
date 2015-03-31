

function action(){
	//Steuerung linke Spielfigur 123
	if(input.d){
		dir1=true;
		if (x1+speedX>=width-42){
		x1=width-42;	
		}else{
		x1+=speedX;
		}
	}
	
	if (input.a){
		dir1=false;
		if (x1-2<=2){
		x1= speedX;
		}else{
		x1-=speedX;	
		}
		
	}
	if (input.w){
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
	
	if(input.s){
				
	}
	if(input.shift){
		if(!shoot1){	
			shoot1=true;
			direction1=dir1;
			sy1 = y1+15;
			if (direction1)sx1 = x1+40;
			else sx1=x1;
			
		}
	}
	
	//Steuerung rechte Spielfigur
	if(input.right){
		dir2=true;
		if (x2+speedX>=width-42){
		x2=width-42;	
		}else{
		x2+=speedX;
		}
	}
	
	if (input.left){
		dir2=false;
		if (x2-speedX<=2){
		x2= 2;
		}else{
		x2-=speedX;	
		}
		
	}
	if (input.up){
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
	
	if(input.down){
				
	}
	
	if(input.space){
		if(!shoot2){	
			shoot2=true;
			direction2=dir2;
			sy2 = y2+15;
			if (direction2)sx2 = x2+40;
			else sx2=x2;
		}	
	}
	
	

}
