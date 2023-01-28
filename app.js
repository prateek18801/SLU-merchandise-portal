const express = require('express');

const app = express();

app.get('/', (req, res, next) => {
    res.send('server running');
});

app.listen(process.env.PORT, () => {
    console.log(`server running on PORT:${process.env.PORT}`);
});