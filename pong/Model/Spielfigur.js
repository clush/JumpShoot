function Spielfigur(blickrichtung, color) {

//statische Attribute

    this.color = color;
    this.player=blickrichtung; //true = Spieler1
    this.playerwidth = 30;
    this.playerheight = 80;
    this.speed = 4;
    this.jumpheight=24;

//Objekte

    this.livebar = new Livebar(this.player);
    this.kugel1 = new Kugel(this.player);
    this.kugel2 = new Kugel(this.player);
    this.kugel3 = new Kugel(this.player);
    this.kugel4 = new Kugel(this.player);

//dynamische Attribute

    if (blickrichtung)this.x = 40; else this.x = width - (this.playerwidth + 40)
    this.y = height - (this.playerheight + 41);

    this.jumpSpeed = 0;
    this.kugelnummer = 0;

//Timer

    this.timer = 0;
    this.shootingtime = 20;

    this.loadtimer = 0;
    this.loadtime = 80;

//Schalter

    this.blickrichtung = blickrichtung; // true = schaut nach rechts
    this.jumped = false;
    this.increase = false;
    this.shooting = false;
    this.keypressed = false;

// Methoden

    this.moveLeft = function () {

        this.blickrichtung = false;

        if (this.x - this.speed <= 2) {
            this.x = 2;
        } else {
            this.x -= this.speed;
        }
    }

    this.moveRight = function () {

        this.blickrichtung = true;

        if (this.x + this.speed >= (width - (this.playerwidth + 2))) {
            this.x = width - (this.playerwidth + 2);
        } else {
            this.x += this.speed;
        }
    }

    this.jump = function () {

        if (this.increase) {
            if (this.jumpSpeed == 0) {
                this.increase = false;
            } else {
                this.y -= this.jumpSpeed;
                this.jumpSpeed--;
            }
        } else if ((this.y + this.jumpSpeed) >= (height - (this.playerheight + 41))) {
            this.y = height - (this.playerheight + 41);
            this.jumped = false;
            this.jumpSpeed = 0;
        } else {
            this.y += this.jumpSpeed;
            this.jumpSpeed++;
        }
    }

    this.shoot = function () {
        if (this.kugelnummer >= 1)this.kugel1.fly();
        if (this.kugelnummer >= 2)this.kugel2.fly();
        if (this.kugelnummer >= 3)this.kugel3.fly();
        if (this.kugelnummer >= 4)this.kugel4.fly();

    }

    this.load = function () {
        this.loadtimer++;
        if (this.loadtimer == this.loadtime * (1 / 4)) {
            this.kugel1.visible = true;
            this.kugel1.loaded = true;
        }
        if (this.loadtimer == this.loadtime * (2 / 4)) {
            this.kugel2.visible = true;
            this.kugel2.loaded = true;
        }
        if (this.loadtimer == this.loadtime * (3 / 4)) {
            this.kugel3.visible = true;
            this.kugel3.loaded = true;
        }
        if (this.loadtimer == this.loadtime) {
            this.kugel4.visible = true;
            this.kugel4.loaded = true;
            this.kugelnummer = 0;
            this.loadtimer = 0;
        }

    }

    this.draw = function () {

        ctx.fillStyle = "#ff0000";
        ctx.fillRect(this.livebar.x, this.livebar.y, this.livebar.length, 10);

        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.playerwidth, this.playerheight);

        if (this.kugel1.loaded) {
            ctx.fillStyle = "#000000";
            ctx.fillRect(this.x + 5, this.y + 10, 20, 10);
        }
        if (this.kugel2.loaded) {
            ctx.fillStyle = "#000000";
            ctx.fillRect(this.x + 5, this.y + 25, 20, 10);
        }
        if (this.kugel3.loaded) {
            ctx.fillStyle = "#000000";
            ctx.fillRect(this.x + 5, this.y + 40, 20, 10);
        }
        if (this.kugel4.loaded) {
            ctx.fillStyle = "#000000";
            ctx.fillRect(this.x + 5, this.y + 55, 20, 10);
        }
    }

    this.update = function () {

        if (this.jumped) {
            this.jump();
        }

        this.shoot();
        if (this.kugelnummer >= 5)this.load();

        if (this.shooting) {
            this.timer++;
            if (this.timer >= this.shootingtime) {
                this.shooting = false;
                this.timer = 0;
            }
        }
    }

}

