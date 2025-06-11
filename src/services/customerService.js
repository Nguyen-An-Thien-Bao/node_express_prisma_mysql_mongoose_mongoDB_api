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
        console.log('>>> Error From Get Customer Data: ', error);
        return {
            errorCode: 1,
            data: null,
            error: error,
        };
    }
};

const updateCustomerService = async (customerData) => {
    try {
        const result = await Customer.updateOne(
            { _id: customerData.id },
            {
                name: customerData.name,
                email: customerData.email,
                phone: customerData.phone,
                address: customerData.address,
                description: customerData.description,
                image: customerData.image,
            },
        );
        return {
            errorCode: 0,
            data: result,
        };
    } catch (error) {
        console.log('>>> Error From Update Customer Data: ', error);
        return {
            errorCode: 1,
            data: null,
            error: error,
        };
    }
};

const deleteCustomerService = async (customerId) => {
    try {
        const result = await Customer.deleteById(customerId);
        return {
            errorCode: 0,
            data: result,
        };
    } catch (error) {
        console.log('>>> Error From Delete Customer: ', error);
        return {
            errorCode: 1,
            data: null,
            error: error,
        };
    }
};

const deleteArrayOfCustomerService = async (customerIdList) => {
    try {
        const result = await Customer.delete({ _id: { $in: customerIdList } });
        return {
            errorCode: 0,
            data: result,
        };
    } catch (error) {
        console.log('>>> Error From Delete Array Of Customer: ', error);
        return {
            errorCode: 1,
            data: null,
            error: error,
        };
    }
};

module.exports = {
    createCustomerService,
    createArrayOfCustomerService,
    getCustomersService,
    updateCustomerService,
    deleteCustomerService,
    deleteArrayOfCustomerService,
};
