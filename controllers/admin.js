const Order = require('../model/order');

// PAGE
exports.getDashboard = async (req, res, next) => {
    const { application_id, start_date, end_date } = req.query;
    try {

        if (!(application_id || start_date || end_date))
            return res.status(200).render('admin/dashboard', {
                home_page: true,
                admin_page: true,
                orders: []
            });

        const data = application_id.length ? await Order.find({ application_id }) : await Order.find({
            createdAt: {
                $gte: new Date(new Date(start_date).setHours(00, 00, 00)),
                $lt: new Date(new Date(end_date).setHours(23, 59, 59))
            }
        }).sort({ createdAt: 1 });

        return res.status(200).render('admin/dashboard', {
            home_page: true,
            admin_page: true,
            orders: data
        });

    } catch (err) {
        next(err);
    }
}
