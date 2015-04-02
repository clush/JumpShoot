
Canvas = document.getElementById("Pong");
ctx = Canvas.getContext("2d");

width= 800;
height= 500;
Spieler1= new Spielfigur(40,height-41,4,true,"#0000ff",40,40);
Spieler2= new Spielfigur(width-80,height-41,4,false,"#00ff00",40,40) //Achtung: Wenn Playerwidth sich ändert muss Anfangsposition geändert werden.

setInterval(main, 1000/60); //Refreshzyklus

function main(){
	
	clear();
	action();
	Spieler1.draw();
	Spieler2.draw();	
	
}


