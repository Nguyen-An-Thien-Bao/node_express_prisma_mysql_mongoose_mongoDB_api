const express = require('express');
const {
    postUploadSingleFile,
    postUploadMultipleFile,
    postCreateCustomer,
    postCreateArrayCustomer,
    getCustomer,
    putUpdateCustomer,
    deleteCustomer,
    deleteArrayOfCustomer,
} = require('../controllers/customerController');
const router = express.Router();

router.post('/file', postUploadSingleFile);
router.post('/files', postUploadMultipleFile);
router.post('/customers', postCreateCustomer);
router.get('/customers', getCustomer);
router.put('/customers', putUpdateCustomer);
router.delete('/customers', deleteCustomer);

router.post('/customers-many', postCreateArrayCustomer);
router.delete('/customers-many', deleteArrayOfCustomer);

// test Query String

router.get('/querystring', async (req, res) => {
    return res.status(200).json({
        data: req.query,
    });
});

router.get('/params/:name/:age', async (req, res) => {
    return res.status(200).json({
        data: req.params,
    });
});

module.exports = router;
