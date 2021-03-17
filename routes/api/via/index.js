const { Router } = require("express")
const router = Router()
const controller = require("../../../controller/api/via/index");


router.get("", controller.getAllVia) //api
router.get("/via_cercana", controller.ViaCercana) //api

module.exports = router