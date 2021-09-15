const router = require("express").Router();
const session = require("express-session");
const userInterfaceController = require("../controllers/user-interface/");

const userAuth = require("../middlewares/userAuth");

router.get("/", userInterfaceController.index);
router.get("/perfil", userInterfaceController.accountInformation);
router.get("/enderecos", userInterfaceController.accountAddresses);

router.put("/perfil", userInterfaceController.editAccount);
router.post("/enderecos", userInterfaceController.createAddress);


module.exports = router;
