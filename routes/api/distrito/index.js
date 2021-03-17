const { Router } = require("express")
const router = Router()
const controller = require("../../../controller/api/distrito/index");


router.get("", controller.getAllDistrito) //api
router.get("/distrito_cercano", controller.DistritoCercano) //api

module.exports = router