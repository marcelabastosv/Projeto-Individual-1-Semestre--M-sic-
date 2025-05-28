var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas/:idResultado_Usuario", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});

router.get("/tempo-real/:idResultado_Usuario", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
})

router.get("/kpis", function (req, res) {
    medidaController.buscarkpisDash(req, res);
})

router.get("/fkUsuario", function (req, res) {
    medidaController.buscarfkUsuario(req, res);
})

module.exports = router;