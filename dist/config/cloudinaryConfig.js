"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cloudinaryDestroy = exports.cloudinaryUpload = void 0;
const cloudinary_1 = __importDefault(require("cloudinary"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config(); // Load environment variables from .env file
cloudinary_1.default.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});
const cloudinaryUpload = async (filePath) => {
    try {
        const result = await cloudinary_1.default.v2.uploader.upload(filePath);
        return result;
    }
    catch (error) {
        if (error instanceof Error) {
            throw new Error(`Cloudinary upload failed: ${error.message}`);
        }
        else {
            throw new Error('Cloudinary upload failed: Unknown error');
        }
    }
};
exports.cloudinaryUpload = cloudinaryUpload;
const cloudinaryDestroy = async (publicId) => {
    try {
        const result = await cloudinary_1.default.v2.uploader.destroy(publicId);
        return result;
    }
    catch (error) {
        if (error instanceof Error) {
            throw new Error(`Cloudinary delete failed: ${error.message}`);
        }
        else {
            throw new Error('Cloudinary delete failed: Unknown error');
        }
    }
};
exports.cloudinaryDestroy = cloudinaryDestroy;
