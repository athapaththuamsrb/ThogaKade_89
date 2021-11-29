const express = require('express');
const OrderController = require('../controller/OrderController');

const router = express.Router();

/*
* POST--> save
* PUT--> update
* DELETE--> delete
* GET--> get
* */

router.post("/saveOrder", OrderController.saveOrder);
// router.put('/updateCustomer', CustomerController.updateCustomer);
// router.delete('/deleteCustomer', CustomerController.deleteCustomer);
// router.get('/searchCustomer', CustomerController.searchCustomer);
// router.get('/getAllCustomers', CustomerController.getAllCustomers);

module.exports = router;
