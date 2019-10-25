
module.exports = app => {
    var soap = require('soap');
    const url = "http://localhost:8088/mockNumberConversionSoapBinding?WSDL";
    /**
     * @api {get} /numberToWords converte número em palavra (Integração com WSDL)
     * @apiGroup numberToWords
     * @apiSuccess {Number} number número que será convertido
     * @apiSuccessExample {json} Sucesso
     *      HTTP/1.1 200 OK
     *      {"NumberToWordsResult": "eleven"}
     */
    app.route("/numberToWords")
    .get((req, res) => {
        var value = req.query.number;

        if(value == undefined) {
            value = req.body.number;
        }
        const args = {ubiNum: value}
        soap.createClient(url, function(err, client) {
            client.NumberToWords(args, function(err, result){
                res.json(result);
            });
        });
    });
}
