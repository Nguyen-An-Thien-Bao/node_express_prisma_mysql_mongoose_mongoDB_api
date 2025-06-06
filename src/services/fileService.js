const uploadSingleFile = async (fileObject) => {
    try {
        let uploadPath = __dirname + fileObject.name;
        await fileObject.mv(uploadPath);
        return {
            status: 'success',
            path: 'link-image',
            error: null,
        };
    } catch (error) {
        return {
            status: 'fail',
            path: null,
            error: JSON.stringify(error),
        };
    }
};

const uploadMultipleFile = async (fileObjectArray) => {
    try {
        let uploadPath;
        for (let i = 0; i < fileObjectArray.length; i++) {
            uploadPath = __dirname + fileObjectArray[i].name;
            await fileObjectArray[i].mv(uploadPath);
        }
        return {
            status: 'success',
            path: 'link-image',
            error: null,
        };
    } catch (error) {
        return {
            status: 'fail',
            path: null,
            error: JSON.stringify(error),
        };
    }
};

module.exports = { uploadMultipleFile, uploadSingleFile };
