const { Router } = require("express");
const userController = require("../controllers/login.controller");
const router = Router();
const session = require("express-session")

router.get("/", userController.loginPage);
router.post("/", userController.postLogin);

router.get("/logout",(req, res)=>{
    let status = session.userName = undefined;
    if(status == undefined){
        res.redirect("/login")
    }
})

module.exports = router;