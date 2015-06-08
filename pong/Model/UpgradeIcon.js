/**
 * Created by Claus on 08.06.2015.
 */

function UpgradeIcon() {

    this.x = 0;
    this.y = 0;
    this.visible = true;
    this.color = "000000";
    this.radius = 10;

    this.aktive = false;
    this.speed = 2;
    this.timer = 60;
    this.UpgradeArt = 0;

    this.init = function () {

        this.color = "red";
        this.aktive = true;

        this.y = this.radius;

        this.x =  Math.round(Math.random()*(width-this.radius))+this.radius;

    };

    this.upgrade = function(){

        if(this.aktive){
            this.fly();
        }else{
            this.timer--;
            if(this.timer<=0){
                this.init();
                this.timer=60;
            }
        }
    };

    this.fly = function () {

        this.y += this.speed;

        if (this.visible) {
            this.draw();
            this.collision();
        }
    };

    this.draw = function () {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = 'red';
        ctx.fill();
    };

    this.collision = function () {

        if ((this.x >= Spieler2.x || this.x + this.bulletlength >= Spieler2.x) && (this.x <= Spieler2.x + Spieler2.playerwidth || this.x + this.bulletlength <= Spieler2.playerwidth) &&
            this.y >= Spieler2.y && this.y <= Spieler2.y + Spieler2.playerheight) {
            this.visible = false;

            Spieler1.playerheight = 160;
            Spieler1.y = height - (Spieler1.playerheight + 41);
            this.aktive = false;
        }

        if ((this.x >= Spieler1.x || this.x + this.bulletlength >= Spieler1.x) && (this.x <= Spieler1.x + Spieler1.playerwidth || this.x + this.bulletlength <= Spieler1.playerwidth) &&
            this.y >= Spieler1.y && this.y <= Spieler1.y + Spieler1.playerheight) {
            this.visible = false;

            Spieler2.playerheight = 160;
            Spieler2.y = height - (Spieler2.playerheight + 41);
            this.aktive = false;
        }

    }


}