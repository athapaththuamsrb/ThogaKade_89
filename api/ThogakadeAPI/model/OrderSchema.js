const mongoose = require('mongoose');
const OrderSchema = new mongoose.Schema({
    customer: {
        type: Object
    },
    items: {
        type: Array
    },
    total: {
        type: Number
    },
});
module.exports = mongoose.model("Order", OrderSchema);