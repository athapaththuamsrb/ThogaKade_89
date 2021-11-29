const express = require('express');
const CustomerController = require('../controller/CustomerController');

const router = express.Router();

/*
* POST--> save
* PUT--> update
* DELETE--> delete
* GET--> get
* */

router.post("/saveCustomer", CustomerController.saveCustomer);
router.put('/updateCustomer', CustomerController.updateCustomer);
router.delete('/deleteCustomer', CustomerController.deleteCustomer);
router.get('/searchCustomer', CustomerController.searchCustomer);
router.get('/getAllCustomers', CustomerController.getAllCustomers);

module.exports = router;
