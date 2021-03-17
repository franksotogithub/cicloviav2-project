const { Router } = require("express")
const router = Router()
const controller = require("../../../controller/api/anexe/index");


router.get("", controller.getAllAnexe) //api
router.get("/:number", controller.getAnexe) //api
module.exports = router