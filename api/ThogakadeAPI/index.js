const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()
const cors = require('cors')
const bodyParser = require('body-parser')
//------------------------
const CustomerRoute = require('./route/CustomerRoute');
const OrderRoute = require('./route/OrderRoute');
const UserRoute = require('./route/UserRoute');
const PORT = process.env.SERVER_PORT;

const app = express();
app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

mongoose.connect(
    'mongodb://127.0.0.1:27017/thogakade89'
).then(() => {
    app.listen(PORT, () => {
        console.log(`Thogakade Service Up and Running on ${PORT}`);
    })
}).catch((error => {
    console.log(error)
}));

//--------------
app.use('/api/v1/customer',CustomerRoute);
app.use('/api/v1/order',OrderRoute);
app.use('/api/v1/user',UserRoute);

// post(http://localhost:3000/api/v1/customer/saveCustomer)
