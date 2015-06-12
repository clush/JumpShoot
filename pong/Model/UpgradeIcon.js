/**
 * Created by Claus on 08.06.2015.
 */

function UpgradeIcon() {

    this.x = 0;
    this.y = 0;
    this.visible = true;
    this.color = "000000";
    this.radius = 20;

    this.aktive = false;
    this.speed = 2;
    this.timer=Math.round(Math.random()*(600))+200;
    this.upgradeArt;

    this.init = function () {

        this.timer=Math.round(Math.random()*(600))+200;
        this.aktive = true;

        this.y = this.radius;

        this.x =  Math.round(Math.random()*(width-this.radius))+this.radius;
        this.upgradeArt = Math.round(Math.random()*2);

        if(this.upgradeArt==0)this.color = 'red';
        else if (this.upgradeArt==1)this.color= 'green';
        else if (this.upgradeArt==2)this.color='blue';

    };

    this.update = function(){

        if(this.aktive){
            this.fly();
        }else{
            this.timer--;
            if(this.timer<=0){

                this.init();
            }
        }
    };

    this.fly = function () {

        this.y += this.speed;

        this.draw();
        this.collision();

    };

    this.draw = function () {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = this.color;
        ctx.fill();
    };

    this.collision = function () {

        if ((this.x - this.radius >= Spieler2.x || this.x + this.radius >= Spieler2.x) && (this.x - this.radius <= Spieler2.x + Spieler2.playerwidth || this.x + this.radius <= Spieler2.x + Spieler2.playerwidth) &&
            (this.y - this.radius >= Spieler2.y || this.y + this.radius >= Spieler2.y) && (this.y - this.radius <= Spieler2.y + Spieler2.playerheight || this.y + this.radius <= Spieler2.y + Spieler2.playerheight)) {

            this.upgrade(Spieler2);
            this.aktive = false;
        }

        if ((this.x - this.radius >= Spieler1.x || this.x + this.radius >= Spieler1.x) && (this.x - this.radius <= Spieler1.x + Spieler2.playerwidth || this.x + this.radius <= Spieler1.x + Spieler1.playerwidth) &&
            (this.y - this.radius >= Spieler1.y || this.y + this.radius >= Spieler1.y) && (this.y - this.radius <= Spieler1.y + Spieler2.playerheight || this.y + this.radius <= Spieler1.y + Spieler1.playerheight)) {

            this.upgrade(Spieler1);
            this.aktive = false;
        }


        if((this.y + this.radius) >= (height - 41)){
            //this.visible = false;
            this.aktive = false;
        }

    }

    this.upgrade = function(player){
        if(this.upgradeArt == 0){
            if(player == Spieler1){
                Spieler2.playerheight = 160;
                Spieler2.y = height - (Spieler2.playerheight + 41);
            }else{
                Spieler1.playerheight = 160;
                Spieler1.y = height - (Spieler1.playerheight + 41);
            }
        }
        else if(this.upgradeArt == 1){
            player.playerheight = 80;
            if(!player.jumped)
            {
                player.y = height - (Spieler2.playerheight + 41);
            }
        }
        else if(this.upgradeArt == 2){
            player.items.granate1.loaded = true;
            player.items.granate1.visible = true;
        }
    }

}