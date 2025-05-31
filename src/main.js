const express = require('express');
const path = require('path');
const connectionDB = require('./configs/dbConnection');

const viewEngineConfig = require('./configs/configViewEngine');
const webRoutes = require('./routes/webRoutes');
require('dotenv').config();

const app = express();
viewEngineConfig(app);

const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', webRoutes);

connectionDB();

app.listen(PORT, () => {
    console.log(`API is running on port ${PORT}`);
});
