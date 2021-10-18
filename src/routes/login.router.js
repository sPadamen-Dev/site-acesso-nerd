const { Router } = require("express");
const userController = require("../controllers/login.controller");
const router = Router();


router.get("/", userController.loginPage);
router.post("/", userController.postLogin)


module.exports = router;