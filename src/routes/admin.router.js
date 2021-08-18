const { Router } = require("express");
const adminController = require("../controllers/admin.controller");
const router = Router();

router.get("/", adminController.adminHome);

module.exports = router;