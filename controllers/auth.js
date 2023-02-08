const User = require('../model/user');

// PAGE
exports.getLogin = (req, res, next) => {
    return res.status(200).render('auth/login', {
        home_page: false,
        admin_page: false
    });
}
