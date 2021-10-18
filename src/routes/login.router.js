const { Router } = require("express");
const userController = require("../controllers/login.controller");
const router = Router();
const session = require("express-session")


router.get("/", userController.loginPage);
router.post("/", userController.postLogin)


module.exports = router;