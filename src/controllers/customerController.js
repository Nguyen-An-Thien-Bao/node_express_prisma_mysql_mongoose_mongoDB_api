const { uploadSingleFile, uploadMultipleFile } = require('../services/fileService');

const postUploadSingleFile = async (req, res) => {
    console.log(req.files);
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded');
    }
    // const result = await uploadSingleFile(req.files.image);
    console.log(result);
    return res.send('Single File Success');
};

const postUploadMultipleFile = async (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded');
    }
    const result = await uploadMultipleFile(req.files.image);
    console.log('Uploaded Multiple File>>> ', result);
    return res.send('Multiple File Success');
};

module.exports = { postUploadSingleFile, postUploadMultipleFile };
