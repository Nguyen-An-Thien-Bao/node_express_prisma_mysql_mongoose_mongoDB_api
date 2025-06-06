const express = require('express');
const { postUploadSingleFile, postUploadMultipleFile } = require('../controllers/customerController');
const router = express.Router();

router.post('/file', postUploadSingleFile);
router.post('/files', postUploadMultipleFile);

module.exports = router;
