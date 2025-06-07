const express = require('express');
const {
    postUploadSingleFile,
    postUploadMultipleFile,
    postCreateCustomer,
    postCreateArrayCustomer,
    getCustomer,
    putUpdateCustomer,
} = require('../controllers/customerController');
const router = express.Router();

router.post('/file', postUploadSingleFile);
router.post('/files', postUploadMultipleFile);
router.post('/customers', postCreateCustomer);
router.post('/customers-many', postCreateArrayCustomer);
router.get('/customers', getCustomer);
router.put('/customers', putUpdateCustomer);

module.exports = router;
