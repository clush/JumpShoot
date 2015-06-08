/**
 * Created by Claus on 20.05.2015.
 */

describe("Kugeln", function(){
    it("Treffer gelandet", function() {

        Spieler1.x=40;
        Spieler1.y=379;
        Spieler1.items.kugel1.x=42;
        Spieler1.items.kugel1.y=400;
        Spieler1.items.kugel1.collision();
        expect(Spieler1.livebar.length).toEqual(80);
    });
});