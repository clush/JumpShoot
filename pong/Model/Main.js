
input = new Input();

addEventListener("keydown", function (event) {
    input.set(event, true);
}, false);

addEventListener("keyup", function (event) {
    input.set(event, false);
}, false);

width = 800;
height = 500;
Spieler1 = new Spielfigur(true, "#0000ff");
Spieler2 = new Spielfigur(false, "#00ff00") //Achtung: Wenn Playerwidth sich ändert muss Anfangsposition geändert werden.


setInterval(main, 1000 / 60); //Refreshzyklus

function main() {


    clear();
    action();

    Spieler1.update();
    Spieler1.draw();

    Spieler2.update();
    Spieler2.draw();

}


