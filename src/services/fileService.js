const fs = require('fs');
const path = require('path');

const uploadSingleFile = async (fileObject) => {
    const uploadPath = path.join(__dirname, '../public/images/upload');
    if (!fs.existsSync(uploadPath)) {
        fs.mkdirSync(uploadPath, { recursive: true });
    }
    const extName = path.extname(fileObject.name);
    const baseName = path.basename(fileObject.name, extName);
    const finalName = `${baseName}-${Date.now()}${extName}`;
    const finalPath = `${uploadPath}\\${finalName}`;

    try {
        await fileObject.mv(finalPath);
        return {
            status: 'success',
            path: finalPath,
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
        const result = [];
        for (let i = 0; i < fileObjectArray.length; i++) {
            uploadPath = path.join(__dirname, '../public/images/upload');
            if (!fs.existsSync(uploadPath)) {
                fs.mkdirSync(uploadPath, { recursive: true });
            }
            const extName = path.extname(fileObjectArray[i].name);
            const baseName = path.basename(fileObjectArray[i].name, extName);
            const finalName = `${baseName}-${Date.now()}${extName}`;
            const finalPath = `${uploadPath}\\${finalName}`;
            await fileObjectArray[i].mv(finalPath);
            result.push({
                status: 'success',
                path: finalPath,
                error: null,
            });
        }
        return result;
    } catch (error) {
        return {
            status: 'fail',
            path: null,
            error: JSON.stringify(error),
        };
    }
};

module.exports = { uploadMultipleFile, uploadSingleFile };
