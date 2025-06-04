const express = require('express');
const {
    getDrinksAPI,
    postCreateDrinksAPI,
    putUpdateDrinksAPI,
    deleteDrinksAPI,
} = require('../controllers/drinkController');
const router = express.Router();

router.get('/drinks', getDrinksAPI);

router.post('/drinks', postCreateDrinksAPI);

router.put('/drinks', putUpdateDrinksAPI);

router.delete('/drinks', deleteDrinksAPI);

module.exports = router;
