// PAGE
exports.getLandingPage = (req, res, next) => {
    return res.status(200).render('user/landing-page', {
        home_page: true
    });
}

exports.getClaimForm = (req, res, next) => {
    return res.status(200).render('user/claim-form', {
        home_page: false
    });
}

// API
exports.postClaimForm = (req, res, next) => {
    console.log(req.body);
}
