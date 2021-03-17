const { Router } = require("express")
const router = Router()
const controller = require("../../../controller/api/usuario/index");


router.get("", controller.getAllUsuario) //api
router.get("/:id", controller.getUsuario) //api
router.post("", controller.createUsuario) //api
router.post("/login", controller.login) //api
router.put("", controller.updateUsuario) //api
router.delete("/:id", controller.removeUsuario) //api

module.exports = router