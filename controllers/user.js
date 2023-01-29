// PAGE
exports.getLandingPage = (req, res, next) => {
    return res.status(200).render('user/landing-page');
}

exports.getClaimForm = (req, res, next) => {
    return res.status(200).render('user/claim-form');
}

// API
exports.postClaimForm = (req, res, next) => {
    console.log(req.body);
}
