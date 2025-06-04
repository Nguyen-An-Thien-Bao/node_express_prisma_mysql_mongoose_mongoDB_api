const Drink = require('../modals/drinks');

const getDrinksAPI = async (req, res) => {
    try {
        const result = await Drink.find({});
        return res.status(200).json({
            errorCode: 0,
            data: result,
        });
    } catch (error) {
        console.error('Error fetching drinks: ', error);
        return res.status(500).json({
            errorCode: 1,
            message: 'Failed to retrieve drinks',
            error: error.message,
        });
    }
};

const postCreateDrinksAPI = async (req, res) => {
    try {
        const drinkName = req.body.name;
        const drinkPrice = req.body.price;
        const result = await Drink.create({ name: drinkName, price: drinkPrice });
        return res.status(200).json({
            errorCode: 0,
            data: result,
        });
    } catch (error) {
        console.log('Error posting drinks: ', error);
        return res.status(500).json({
            errorCode: 1,
            message: 'Failed to Post drink',
            error: error.message,
        });
    }
};

const putUpdateDrinksAPI = async (req, res) => {
    try {
        const newDrinkName = req.body.name;
        const newDrinkPrice = req.body.price;
        const currentdDrinkId = req.body.id;
        const result = await Drink.updateOne({ _id: currentdDrinkId }, { name: newDrinkName, price: newDrinkPrice });
        return res.status(200).json({
            errorCode: 0,
            data: result,
        });
    } catch (error) {
        return res.status(500).json({
            errorCode: 1,
            message: 'Failed to Update drink',
            error: error.message,
        });
    }
};

const deleteDrinksAPI = async (req, res) => {
    try {
        const currentId = req.body.id;
        const result = await Drink.deleteOne({ _id: currentId });
        return res.status(200).json({
            errorCode: 0,
            data: result,
        });
    } catch (error) {
        console.log('Failed to Delete drink: ', error);
        return res.status(500).json({
            errorCode: 1,
            message: 'Failed to Delete drink',
            error: error.message,
        });
    }
};

module.exports = { getDrinksAPI, postCreateDrinksAPI, putUpdateDrinksAPI, deleteDrinksAPI };
