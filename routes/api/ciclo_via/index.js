const { Router } = require("express")
const router = Router()
const controller = require("../../../controller/api/ciclo_via/index");


router.get("", controller.getAllCicloVia) //api
router.get("/ciclo_via_cercana", controller.CicloViaCercana) //api

module.exports = router