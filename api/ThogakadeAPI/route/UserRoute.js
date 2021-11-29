const express = require('express');
const UserController = require('../controller/UserController');

const router = express.Router();


router.post("/signUp", UserController.signUp);
router.get("/login", UserController.login);

module.exports = router;
