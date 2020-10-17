const express = require("express");
const mainController = require("../controller/mainController");
const router = express.Router();

router.get("/", mainController.getHomePage)
router.get("/contact", mainController.getContactPage);
router.get("/faq", mainController.getFaqPage);
router.get("/normal", mainController.getDeliveryPage);
router.get("/special_offer", mainController.getSpecialOffersPage);
router.get("/login", mainController.getLoginPage);
router.get("/compair", mainController.getCompairPage);
router.get("/register", mainController.getRegisterPage);
router.get("/components", mainController.getComponentsPage);
router.get("/forgetpass", mainController.getForgetPassPage);
router.get("/legal_notice", mainController.getLegalNoticePage);
router.get("/tac", mainController.getTacPage);
router.get("/product_summary", mainController.getProductSummaryPage);
router.get("/product_details", mainController.getProductDetailsPage);
router.get("/products/:productId", mainController.getProductsPage);
router.get("/cart", mainController.getCartPage);
router.post("/cart", mainController.postCartPage);
router.get("/orders", mainController.getOrdersPage);
router.post("/make-order", mainController.postOrdersPage);

module.exports = router;
