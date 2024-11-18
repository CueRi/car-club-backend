"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteGallery = exports.updateGallery = exports.getAllGalleries = exports.createGallery = void 0;
const Gallery_1 = __importDefault(require("../models/Gallery"));
const createGallery = async (req, res) => {
    try {
        const gallery = await Gallery_1.default.create(req.body);
        res.status(201).json(gallery);
    }
    catch (error) {
        res.status(500).json({ error: "Unable to create gallery" });
    }
};
exports.createGallery = createGallery;
const getAllGalleries = async (_req, res) => {
    try {
        const galleries = await Gallery_1.default.findAll();
        res.status(200).json(galleries);
    }
    catch (error) {
        res.status(500).json({ error: "Unable to fetch galleries" });
    }
};
exports.getAllGalleries = getAllGalleries;
const updateGallery = async (req, res) => {
    const { id } = req.params;
    try {
        await Gallery_1.default.update(req.body, { where: { id } });
        const updatedGallery = await Gallery_1.default.findByPk(id);
        res.status(200).json(updatedGallery);
    }
    catch (error) {
        res.status(500).json({ error: "Unable to update gallery" });
    }
};
exports.updateGallery = updateGallery;
const deleteGallery = async (req, res) => {
    const { id } = req.params;
    try {
        await Gallery_1.default.destroy({ where: { id } });
        res.status(204).send();
    }
    catch (error) {
        res.status(500).json({ error: "Unable to delete gallery" });
    }
};
exports.deleteGallery = deleteGallery;
