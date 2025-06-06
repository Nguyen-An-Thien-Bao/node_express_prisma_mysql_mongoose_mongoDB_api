const express = require('express');
const path = require('path');
const connectionDB = require('./configs/dbConnection');
const fileUpload = require('express-fileupload');

const viewEngineConfig = require('./configs/configViewEngine');
const drinkRoutes = require('./routes/drinkRoutes');
const customerRoutes = require('./routes/customerRoutes');
require('dotenv').config();

const app = express();
viewEngineConfig(app);

const PORT = process.env.PORT || 8080;

app.use(fileUpload());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/v1/api/', drinkRoutes);
app.use('/v1/api/', customerRoutes);

(async () => {
    try {
        await connectionDB();
        app.listen(PORT, () => {
            console.log(`API is running on port ${PORT}`);
        });
    } catch (error) {
        console.log('>>> We have an error, cannot start the API ', error);
    }
})();
