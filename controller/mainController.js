exports.getHomePage = (req, res, next) => { 
	res.render("pages/home");
};

exports.getContactPage =  (req, res, next) => { 
	res.render("pages/contact");
};
exports.getFaqPage =  (req, res, next) => { 
	res.render("pages/faq");
};