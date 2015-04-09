/**
 * Created by Claus on 08.04.2015.
 */

function Livebar(player) {
    this.length = 100;

    if (player)this.x = 4;
    else this.x = width - (this.length + 4);

    this.y = 10;


}
