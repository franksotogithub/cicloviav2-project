const { Router } = require("express")
const router = Router()
const controller = require("../../../controller/api/tramo/index");


router.get("", controller.getAllTramo) //api
router.get("/:id", controller.getTramo) //api
router.post("/update/:id", controller.updateTramo) //api
router.get("/get_tramo/cercano", controller.tramoCercano) //api


module.exports = router