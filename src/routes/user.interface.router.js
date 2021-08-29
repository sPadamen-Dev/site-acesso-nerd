const router = require("express").Router();
const session = require("express-session");
const userInterfaceController = require("../controllers/user-interface/index"); 
const userEditUpdate = require("../controllers/user-interface/user.edit.perfil.controller")

const userAuth = require("../middlewares/userAuth");



router.get("/:config?",userAuth ,userInterfaceController.index)

router.post("/perfil/update", userEditUpdate.saveUpdate)


router.get("/painel/usuario/logout",(req, res)=>{
    let status = session.userName = undefined;
    if(status){
        res.redirect("/")
    }
})

module.exports = router;
