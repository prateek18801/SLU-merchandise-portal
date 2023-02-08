const express = require('express');

const userRouter = require('./routes/user');
const authRouter = require('./routes/auth');
const adminRouter = require('./routes/admin');
require('./utils/db').connect();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use('/', userRouter);
app.use('/auth', authRouter);
app.use('/admin', adminRouter);

app.listen(process.env.PORT, () => {
    console.log(`server running on PORT:${process.env.PORT}`);
});
