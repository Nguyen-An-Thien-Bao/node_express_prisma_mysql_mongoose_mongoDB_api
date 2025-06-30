const { uploadSingleFile, uploadMultipleFile } = require('../services/fileService');
const {
    createCustomerService,
    createArrayOfCustomerService,
    getCustomersService,
    updateCustomerService,
    deleteCustomerService,
    deleteArrayOfCustomerService,
    getCustomerPaginationService,
} = require('../services/customerService');

const postUploadSingleFile = async (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded');
    }
    const result = await uploadSingleFile(req.files.image);
    console.log(result);
    return res.send('Single File Success');
};

const postUploadMultipleFile = async (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded');
    }
    if (Array.isArray(req.files.image)) {
        const result = await uploadMultipleFile(req.files.image);
        console.log('Uploaded Multiple File>>> ', result);
        return res.send('Uploaded Multiple File Success');
    } else {
        const result = await uploadSingleFile(req.files.image);
        console.log('Uploaded Single File>>> ', result);
        return res.send('Uploaded Single File Success');
    }
};

const postCreateCustomer = async (req, res) => {
    let { name, address, phone, email, description } = req.body;
    let imageURL = '';
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No File Were Uploaded');
    } else {
        let result = await uploadSingleFile(req.files.image);
        imageURL = result.path;
        // console.log('>>>', { name, address, phone, email, description, image: result });
    }
    let customerData = { name, address, phone, email, description, image: imageURL };
    let user = await createCustomerService(customerData);
    return res.status(200).json({
        errorCode: 0,
        data: user,
    });
};

const postCreateArrayCustomer = async (req, res) => {
    let customersResult = await createArrayOfCustomerService(req.body.customers);
    if (customersResult.errorCode === 1) {
        return res.status(400).json({
            ...customersResult,
        });
    } else {
        return res.status(200).json({
            errorCode: 0,
            data: customersResult,
        });
    }
};

const getCustomer = async (req, res) => {
    const result = await getCustomersService();
    if (result.errorCode === 0) {
        return res.status(200).json({ ...result });
    } else {
        return res.status(400).json({ ...result });
    }
};

const putUpdateCustomer = async (req, res) => {
    const { name, address, phone, email, description, id } = req.body;
    let image = undefined;
    if (req.files && req.files.image) {
        const result = await uploadSingleFile(req.files.image);
        if (result.status === 'success' && result.error === null) {
            image = result.path;
        } else {
            return res.status(400).send({ ...result });
        }
    }
    const customerData = { name, address, phone, email, description, id, image };
    const result = await updateCustomerService(customerData);
    if (result.errorCode === 0) {
        return res.status(200).json({ ...result });
    } else {
        return res.status(400).json({ ...result });
    }
};

const deleteCustomer = async (req, res) => {
    const customerId = req.body.id;
    const result = await deleteCustomerService(customerId);
    if (result.errorCode === 0) {
        return res.status(200).json({ ...result });
    } else {
        return res.status(400).json({ ...result });
    }
};

const deleteArrayOfCustomer = async (req, res) => {
    const customerIdList = req.body.idList;
    const result = await deleteArrayOfCustomerService(customerIdList);
    if (result.errorCode === 0) {
        return res.status(200).json({ ...result });
    } else {
        return res.status(400).json({ ...result });
    }
};

const getCustomerPagination = async (req, res) => {
    const pageNumber = Number(req.query.page);
    const pageLimit = Number(req.query.limit);

    const result = await getCustomerPaginationService(pageNumber, pageLimit, req.query);
    if (result.errorCode === 0) {
        return res.status(200).json({ ...result });
    } else {
        return res.status(400).json({ ...result });
    }
};

module.exports = {
    postUploadSingleFile,
    postUploadMultipleFile,
    postCreateCustomer,
    postCreateArrayCustomer,
    getCustomer,
    putUpdateCustomer,
    deleteCustomer,
    deleteArrayOfCustomer,
    getCustomerPagination,
};
