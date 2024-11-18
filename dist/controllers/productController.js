"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.updateProduct = exports.getAllProducts = exports.createProduct = void 0;
const Product_1 = __importDefault(require("../models/Product"));
const createProduct = async (req, res) => {
    try {
        const product = await Product_1.default.create(req.body);
        product.orderLink = `/contact`;
        res.status(201).json(product);
    }
    catch (error) {
        res.status(500).json({ error: "Unable to create product" });
    }
};
exports.createProduct = createProduct;
const getAllProducts = async (_req, res) => {
    try {
        const products = await Product_1.default.findAll();
        res.status(200).json(products);
    }
    catch (error) {
        res.status(500).json({ error: "Unable to fetch products" });
    }
};
exports.getAllProducts = getAllProducts;
const updateProduct = async (req, res) => {
    const { id } = req.params;
    try {
        await Product_1.default.update(req.body, { where: { id } });
        const updatedProduct = await Product_1.default.findByPk(id);
        res.status(200).json(updatedProduct);
    }
    catch (error) {
        res.status(500).json({ error: "Unable to update product" });
    }
};
exports.updateProduct = updateProduct;
const deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
        await Product_1.default.destroy({ where: { id } });
        res.status(204).send();
    }
    catch (error) {
        res.status(500).json({ error: "Unable to delete product" });
    }
};
exports.deleteProduct = deleteProduct;
