
const { Router } = require("express")
const router = Router()
const {authenticateJwt } =require("../../midleware/index")



/*router.use("/anexe",authenticateJwt, require("./anexe/index"))*/

/*router.use("/punto_ciclovia",authenticateJwt, require("./punto_ciclovia/index"))*/
router.use("/usuario",authenticateJwt, require("./usuario/index"))
/*router.use("/via",authenticateJwt, require("./via/index"))*/
/*router.use("/distrito",authenticateJwt, require("./distrito/index"))*/
router.use("/tramo",authenticateJwt, require("./tramo/index"))
router.use("/tramo2",authenticateJwt, require("./tramo2/index"))
router.use("/element_tramo",authenticateJwt, require("./element_tramo/index"))
router.use("/auth", require("./auth/index"))
router.use("/file",require("./file/index"))
module.exports = router;




