describe("Livebar", function(){
    it("should return 100 Health Points", function() {
        c = new Livebar(true);
        expect(c.length).toEqual(100);
    });
});