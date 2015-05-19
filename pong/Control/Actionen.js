var input = new Input();

addEventListener("keydown", function (event) {
    input.set(event, true);
}, false);

addEventListener("keyup", function (event) {
    input.set(event, false);
}, false);


function action() {

    //Spieler 1

    if (input.d) {
        Spieler1.moveRight();
    }

    if (input.a) {
        Spieler1.moveLeft();
    }

    if (input.w) {
        if (!Spieler1.jumped) {

            Spieler1.jumpSpeed = Spieler1.jumpheight;
            Spieler1.jumped = true;
            Spieler1.increase = true;
            springe1();
        }
    }


    if (input.shift) {

        if (Spieler1.timer == 0 && !Spieler1.keypressed) {
            Spieler1.kugelnummer++;
            Spieler1.shooting = true;
            Spieler1.keypressed = true;

            if (Spieler1.kugelnummer == 1)Spieler1.kugel1.init();
            if (Spieler1.kugelnummer == 2)Spieler1.kugel2.init();
            if (Spieler1.kugelnummer == 3)Spieler1.kugel3.init();
            if (Spieler1.kugelnummer == 4)Spieler1.kugel4.init();

        }
    } else Spieler1.keypressed = false;


    //Spieler 2

    if (input.right) {
        Spieler2.moveRight();
    }

    if (input.left) {
        Spieler2.moveLeft();
    }

    if (input.up) {
        if (!Spieler2.jumped) {
            Spieler2.jumpSpeed = Spieler2.jumpheight;
            Spieler2.jumped = true;
            Spieler2.increase = true;
            springe2();
        }
    }


    if (input.space) {

        if (Spieler2.timer == 0 && !Spieler2.keypressed) {
            Spieler2.kugelnummer++;
            Spieler2.shooting = true;
            Spieler2.keypressed = true;

            if (Spieler2.kugelnummer == 1)Spieler2.kugel1.init();
            if (Spieler2.kugelnummer == 2)Spieler2.kugel2.init();
            if (Spieler2.kugelnummer == 3)Spieler2.kugel3.init();
            if (Spieler2.kugelnummer == 4)Spieler2.kugel4.init();

        }
    } else Spieler2.keypressed = false;


}
