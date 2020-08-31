const express = require("express");
const mainController = require("../controller/mainController");
const router = express.Router();

router.get("/", mainController.getHomePage)
router.get("/contact", mainController.getContactPage);
router.get("/faq", mainController.getFaqPage);

module.exports = router;
