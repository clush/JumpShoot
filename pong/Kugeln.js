function kugel(color){
    this.x = 0;
    this.y = 0;
    this.color=color;
    this.richtung=true;
    this.speed = 10;


    this.fly = function(){

        if(this.richtung)this.x += this.speed;
        else this.x -= this.speed;

        this.draw();
        this.collision();
    }

    this.draw = function(){
        ctx.fillStyle =this.color;
        ctx.fillRect(this.x,this.y, 5, 5);
    }

    this.collision = function(){

        if (this.x>=Spieler2.x && this.x<=Spieler2.x+Spieler2.playerwidth &&
            this.y>=Spieler2.y && this.y<=Spieler2.y+Spieler2.playerheight ){
            Spieler1.shooting=false;
            window.location.replace("../pong/Spielende1.html");
        }

        if (this.x>=Spieler1.x && this.x<=Spieler1.x+Spieler1.playerwidth &&
            this.y>=Spieler1.y && this.y<=Spieler1.y+Spieler1.playerheight ){
            Spieler2.shooting=false;
            window.location.replace("../pong/Spielende2.html");
        }

    }


}