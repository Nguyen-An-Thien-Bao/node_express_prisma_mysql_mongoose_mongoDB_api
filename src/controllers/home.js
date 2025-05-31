// const connection = require('../configs/dbConnection');

const getHomePage = (req, res) => {
    res.send('Home Page');
};

const getUserList = async (req, res) => {
    // const [result] = await connection.query('SELECT * FROM users');
    // console.log(result);
    res.send('This is users list');
};

module.exports = { getHomePage, getUserList };
