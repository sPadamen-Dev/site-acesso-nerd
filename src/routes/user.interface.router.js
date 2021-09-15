const router = require("express").Router();
const session = require("express-session");
const userInterfaceController = require("../controllers/user-interface/");

const userAuth = require("../middlewares/userAuth");



router.get("/:config?",userAuth ,userInterfaceController.index)

router.post("/perfil", userInterfaceController.editUser)

router.get("/enderecos", userInterfaceController.addressesUsers)


module.exports = router;
