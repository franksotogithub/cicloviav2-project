const { Router } = require("express")
const router = Router()
const controller = require("../../../controller/api/tramo2/index");


router.get("", controller.getAllTramo2) //api
router.get("/:id", controller.getTramo2) //api
router.post("/update/:id", controller.updateTramo2) //api
router.get("/get_tramo/cercano", controller.tramo2Cercano) //api


module.exports = router