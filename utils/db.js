const mongoose = require('mongoose');

function connect() {
    mongoose.set('strictQuery', true);
    mongoose.connect(process.env.MONGODB_URI).then(console.log('DB connected')).catch(err => console.error('DB connection error:', err));
    
    mongoose.connection.on('error', err => console.error('DB connection error:', err));
    mongoose.connection.on('disconnected', () => console.log('DB disconnected'));
    mongoose.connection.on('reconnected', () => console.log('DB reconnected'));

    const gracefulExit = () => {
        mongoose.connection.close(() => {
            console.log('DB connection terminated');
            process.exit(0);
        });
    }
    process.on('SIGINT', gracefulExit);
    process.on('SIGTERM', gracefulExit);
}

module.exports = { connect };
