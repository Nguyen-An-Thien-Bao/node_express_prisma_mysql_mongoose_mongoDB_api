const Customer = require('../modals/customer');

const createCustomerService = async (customerData) => {
    try {
        let result = await Customer.create({ ...customerData });
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
};

const createArrayOfCustomerService = async (customerDataArray) => {
    try {
        let result = await Customer.insertMany(customerDataArray);
        return result;
    } catch (error) {
        console.log('Error From createArrayOfCustomerService >>>', error);
        return {
            errorCode: 1,
            data: null,
            error: error,
        };
    }
};

const getCustomersService = async () => {
    try {
        let result = await Customer.find({});
        return {
            errorCode: 0,
            data: result,
        };
    } catch (error) {
        return {
            errorCode: 1,
            data: null,
            error: error,
        };
    }
};

module.exports = { createCustomerService, createArrayOfCustomerService, getCustomersService, updateCustomerService };
