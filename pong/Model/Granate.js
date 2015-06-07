/**
 * Created by Claus on 07.06.2015.
 */

function Granate (player){
    this.x = 0;
    this.y = 0;
    this.visible = true;
    this.color = "#000000";
    this.player = player;
    this.bulletlength = 20;
    this.bullethight = 5;
    this.richtung = true;
    this.loaded = true;
    this.speed = 15;
    this.damage = 50;
    this.increase = true;
    this.height = 20;
    this.ySpeed = this.height;


    this.init = function () {

        sound();
        this.color = "#ff0000";
        this.loaded = false;

        if (this.player) { //true=Spieler1 false=Spieler2
            this.richtung = Spieler1.blickrichtung;

            if (this.richtung)this.x = Spieler1.x + Spieler1.playerwidth + 1;
            else this.x = Spieler1.x - (this.bulletlength + 1);

            this.y = Spieler1.y + Spieler1.playerheight / 2;
        }
        else {
            this.richtung = Spieler2.blickrichtung;

            if (this.richtung)this.x = Spieler2.x + Spieler2.playerwidth + 1;
            else this.x = Spieler2.x - (this.bulletlength + 1);

            this.y = Spieler2.y + Spieler2.playerheight / 2;
        }

    }

    this.fly = function () {

        if (this.richtung)this.x += this.speed;
        else this.x -= this.speed;

        if (this.increase) {
            if (this.ySpeed == 0) {
                this.increase = false;
            } else {
                this.y -= this.ySpeed;
                this.ySpeed--;
            }
        } else if ((this.y + this.ySpeed) >= (height - 20)) {
            this.visible=false;
            this.explode();
            this.ySpeed = this.height;
        } else {
            this.y += this.ySpeed;
            this.ySpeed++;
        }

        if (this.visible) {
            this.draw();
            this.collision();
        }
    }

    this.draw = function () {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, 5, 0, 2 * Math.PI, false);
        ctx.fillStyle = 'green';
        ctx.fill();

        //ctx.fillRect(this.x, this.y, this.bulletlength, this.bullethight);
    }

    this.collision = function () {

        if ((this.x >= Spieler2.x || this.x + this.bulletlength >= Spieler2.x) && (this.x <= Spieler2.x + Spieler2.playerwidth || this.x + this.bulletlength <= Spieler2.playerwidth) &&
            this.y >= Spieler2.y && this.y <= Spieler2.y + Spieler2.playerheight) {
            this.visible = false;
            // window.location.replace("../pong/Spielende1.html");
            treffer();
            Spieler2.livebar.length -= this.damage;

            if (Spieler2.livebar.length <= 0) {
                if (confirm('Spieler 1 gewinnt, erneut spielen?')) {
                    window.location.replace("../View/index.html");
                }
                else {
                    window.location.replace("../index.php");
                }
            }
        }

        if ((this.x >= Spieler1.x || this.x + this.bulletlength >= Spieler1.x) && (this.x <= Spieler1.x + Spieler1.playerwidth || this.x + this.bulletlength <= Spieler1.playerwidth) &&
            this.y >= Spieler1.y && this.y <= Spieler1.y + Spieler1.playerheight) {
            this.visible = false;
            //window.location.replace("../pong/Spielende2.html");
            treffer();
            Spieler1.livebar.length -= this.damage;

            if (Spieler1.livebar.length <= 0) {
                if (confirm('Spieler 2 gewinnt, erneut spielen?')) {
                    window.location.replace("../View/index.html");
                }
                else {
                    window.location.replace("../index.php");
                }

            }
        }

    }

    this.explode = function () {

        if ((this.x + 100 >= Spieler2.x && this.x - 100 <= Spieler2.x)) {

            // window.location.replace("../pong/Spielende1.html");
            treffer();
            Spieler2.livebar.length -= 20;

            if (Spieler2.livebar.length <= 0) {
                if (confirm('Spieler 1 gewinnt, erneut spielen?')) {
                    window.location.replace("../View/index.html");
                }
                else {
                    window.location.replace("../index.php");
                }
            }
        }

        if ((this.x + 100 >= Spieler1.x && this.x - 100 <= Spieler1.x)){

            //window.location.replace("../pong/Spielende2.html");
            treffer();
            Spieler1.livebar.length -= 20;

            if (Spieler1.livebar.length <= 0) {
                if (confirm('Spieler 2 gewinnt, erneut spielen?')) {
                    window.location.replace("../View/index.html");
                }
                else {
                    window.location.replace("../index.php");
                }

            }
        }

    }

}