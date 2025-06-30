const Customer = require('../modals/customer');
const aqp = require('api-query-params');

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

const getCustomerPaginationService = async (pageNumber, pageLimit, queryString) => {
    try {
        let result;
        // if (nameOption) {
        //     result = await Customer.find({
        //         name: {
        //             $regex: `.*${nameOption}.*`,
        //             $options: 'i',
        //         },
        //     })
        //         .skip(pageLimit * pageNumber - pageLimit)
        //         .limit(pageLimit);
        // } else {
        //     result = await Customer.find({})
        //         .skip(pageLimit * pageNumber - pageLimit)
        //         .limit(pageLimit);
        // }
        if (pageLimit && pageNumber) {
            let offset = (pageNumber - 1) * pageLimit;
            const { filter } = aqp(queryString);
            delete filter.page; // xóa page vì ko cần thiết
            console.log(filter);
            result = await Customer.find(filter).skip(offset).limit(pageLimit).exec();
        } else {
            result = await Customer.find({});
        }
        return {
            errorCode: 0,
            data: result,
        };
    } catch (error) {
        console.log('>>> Error From Get Customer Pagination Service: ', error);
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
    getCustomerPaginationService,
};
