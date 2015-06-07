/**
 * Created by Claus on 07.06.2015.
 */

function Items (player){
    this.player = player;

    this.kugel1 = new Kugel(this.player);
    this.kugel2 = new Kugel(this.player);
    this.kugel3 = new Kugel(this.player);
    this.kugel4 = new Kugel(this.player);

    this.granate1 = new Granate(this.player);

}