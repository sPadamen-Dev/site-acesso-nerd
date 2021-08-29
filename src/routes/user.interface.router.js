const router = require("express").Router();
const userInterfaceController = require("../controllers/user-interface/index"); 

router.get("/:config?", userInterfaceController.index)



module.exports = router;
