const { Router } = require("express")
const router = Router()
const AuthController = require("../../../controller/api/auth/index");



router.post("/login", (req, res, next) => {
    AuthController.login(req, res, next);
}) //api


router.post("/register", (req, res, next) => {
    AuthController.register(req, res, next);
}) //api


module.exports = router