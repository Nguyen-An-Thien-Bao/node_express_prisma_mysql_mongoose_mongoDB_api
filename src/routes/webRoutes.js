const express = require('express');
const homeController = require('../controllers/home');
const router = express.Router();

router.get('/', homeController.getHomePage);
router.get('/users', homeController.getUserList);

module.exports = router;
