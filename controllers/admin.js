const fs = require('fs');
const path = require('path');

const Order = require('../model/order');
const jsontocsv = require('../utils/jsontocsv');

// PAGE
exports.getDashboard = async (req, res, next) => {
    const { application_id, start_date, end_date } = req.query;
    try {

        if (!(application_id || (start_date && end_date)))
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

// API
exports.downloadOrders = async (req, res, next) => {
    const { application_id, start_date, end_date } = req.query;
    try {

        if (!(application_id || (start_date && end_date)))
            return res.status(200).json({
                ok: false,
                message: 'select a valid range'
            });

        const data = application_id.length ? await Order.find({ application_id }).lean() : await Order.find({
            createdAt: {
                $gte: new Date(new Date(start_date).setHours(00, 00, 00)),
                $lt: new Date(new Date(end_date).setHours(23, 59, 59))
            }
        }).sort({ createdAt: 1 }).lean();

        const config = [
            { key: 'application_id', field: 'Appl. ID' },
            { key: 'application_type', field: 'Appl. Type' },
            { key: 'full_name', field: 'Name' },
            { key: 'email', field: 'Email' },
            { key: 'contact_1', field: 'Contact 1' },
            { key: 'contact_2', field: 'Contact 2' },
            { key: 'street_1', field: 'Street 1' },
            { key: 'street_2', field: 'Street 2' },
            { key: 'landmark', field: 'Landmark' },
            { key: 'pin_code', field: 'Pin Code' },
            { key: 'city', field: 'City' },
            { key: 'state', field: 'State' },
            { key: 'country', field: 'Country' }
        ];

        const CSV = jsontocsv(data, config);
        const PATH = path.join(require.main.filename, '..', 'data', `orders.csv`);
        fs.writeFileSync(PATH, CSV);
        return res.download(PATH);

    } catch (err) {
        next(err);
    }
}
