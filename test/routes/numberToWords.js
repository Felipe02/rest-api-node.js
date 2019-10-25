describe("Routes: numberToWords", () => {
    describe("GET /numberToWords", () => {
        it("returns number in full", done => {
            request.get("/numberToWords")
             .send({
                number: "11",
             })
             .expect(200)
             .end((err, res) => {
                expect(res.body.NumberToWordsResult).to.eql("eleven");
                done(err);
             });
        });
    });
});