const Order = require('../model/order');

// PAGE
exports.getLandingPage = (req, res, next) => {
    return res.status(200).render('user/landing-page', {
        home_page: true,
        admin_page: false
    });
}

exports.getClaimForm = (req, res, next) => {
    return res.status(200).render('user/claim-form', {
        home_page: false,
        admin_page: false
    });
}

// API
exports.postClaimForm = async (req, res, next) => {
    const data = { ...req.body };
    try {
        const saved = await new Order(data).save();
        return res.status(201).json({
            ok: true,
            message: 'created'
        });
    } catch (err) {
        next(err);
    }
}
