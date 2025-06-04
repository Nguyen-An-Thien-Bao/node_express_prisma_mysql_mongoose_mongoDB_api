// const mysql2 = require('mysql2/promise');
// require('dotenv').config();

// const connection = mysql2.createPool({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     port: process.env.DB_PORT,
//     database: process.env.DB_NAME,
//     waitForConnections: true,
//     connectionLimit: 10,
//     queueLimit: 0,
// });

// module.exports = connection;
const mongoose = require('mongoose');

const dbState = [
    {
        value: 0,
        label: 'Disconnected',
    },
    {
        value: 1,
        label: 'Connected',
    },
    {
        value: 2,
        label: 'Connecting',
    },
    {
        value: 3,
        label: 'Disconnecting',
    },
];

const connectionOptions = {
    dbName: 'Menu',
    user: 'root',
    pass: '123456',
    autoIndex: true,
};

const connectionDB = async () => {
    try {
        await mongoose.connect('mongodb://root:123456@localhost:27018/', connectionOptions);
        const state = Number(mongoose.connection.readyState);
        console.log(dbState.find((f) => f.value == state).label, 'to Database'); // checking connection
    } catch (error) {
        console.log('>>> We have error connection ', error);
    }
};

module.exports = connectionDB;
