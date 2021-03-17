const { Router } = require("express")
const router = Router()
const controller = require("../../../controller/api/punto_ciclovia/index");


router.get("", controller.getAllPuntoCiclovia) //api
router.get("/:number", controller.getPuntoCiclovia) //api
router.post("", controller.createPuntoCiclovia) //api
module.exports = router