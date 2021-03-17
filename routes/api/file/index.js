const { Router } = require("express")
const router = Router();

const {upload} = require("../../../midleware/mulder");

/*
router.post("", controller.getAllUsuario) //api
router.get("/:id", controller.getUsuario) //api
router.post("", controller.createUsuario) //api
router.post("/login", controller.login) //api
router.put("", controller.updateUsuario) //api
router.delete("/:id", controller.removeUsuario) //api
module.exports = router
*/

router.post('/upload',upload.single('file'),(req,res)=>{
    /*return res.send(req.file);*/
    

    return res.json( {message:'Foto subida correctamente', q:'holass',file:req.file });
});
module.exports = router