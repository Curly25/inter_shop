exports.getHomePage = (req, res, next) => { 
	res.render("pages/home");
};

exports.getContactPage =  (req, res, next) => { 
	res.render("pages/contact");
};
exports.getFaqPage =  (req, res, next) => { 
	res.render("pages/faq");
};
exports.getDeliveryPage =  (req, res, next) => { 
	res.render("pages/delivery");
};
exports.getSpecialOffersPage =  (req, res, next) => { 
	res.render("pages/specialoffers");
};
exports.getLoginPage =  (req, res, next) => { 
	res.render("pages/login");
};
exports.getCompairPage =  (req, res, next) => { 
	res.render("pages/compair");
};
exports.getRegisterPage =  (req, res, next) => { 
	res.render("pages/register");
};
exports.getComponentsPage =  (req, res, next) => { 
	res.render("pages/components");
};

exports.getForgetPassPage =  (req, res, next) => { 
	res.render("pages/forgetpass");
};
exports.getLegalNoticePage =  (req, res, next) => { 
	res.render("pages/legal_notice");
};
exports.getTacPage =  (req, res, next) => { 
	res.render("pages/tac");
};
