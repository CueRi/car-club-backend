"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNewsByCategory = exports.getNewsByName = exports.getNewsById = exports.deleteNews = exports.updateNews = exports.getAllNews = exports.createNews = void 0;
const News_1 = __importDefault(require("../models/News"));
const createNews = async (req, res) => {
    try {
        const news = await News_1.default.create(req.body);
        res.status(201).json(news);
    }
    catch (error) {
        res.status(500).json({ error: "Unable to create news" });
    }
};
exports.createNews = createNews;
const getAllNews = async (_req, res) => {
    try {
        const news = await News_1.default.findAll();
        res.status(200).json(news);
    }
    catch (error) {
        res.status(500).json({ error: "Unable to fetch news" });
    }
};
exports.getAllNews = getAllNews;
const updateNews = async (req, res) => {
    const { id } = req.params;
    try {
        await News_1.default.update(req.body, { where: { id } });
        const updatedNews = await News_1.default.findByPk(id);
        res.status(200).json(updatedNews);
    }
    catch (error) {
        res.status(500).json({ error: "Unable to update news" });
    }
};
exports.updateNews = updateNews;
const deleteNews = async (req, res) => {
    const { id } = req.params;
    try {
        await News_1.default.destroy({ where: { id } });
        res.status(204).send();
    }
    catch (error) {
        res.status(500).json({ error: "Unable to delete news" });
    }
};
exports.deleteNews = deleteNews;
const getNewsById = async (req, res) => {
    const { id } = req.params;
    try {
        const news = await News_1.default.findByPk(id);
        if (!news) {
            res.status(404).json({ error: "News not found" });
            return;
        }
        res.status(200).json(news);
    }
    catch (error) {
        res.status(500).json({ error: "Unable to fetch news" });
    }
};
exports.getNewsById = getNewsById;
const getNewsByName = async (req, res) => {
    const { name } = req.params;
    try {
        const news = await News_1.default.findOne({ where: { name } });
        if (!news) {
            res.status(404).json({ error: "News not found" });
            return;
        }
        res.status(200).json(news);
    }
    catch (error) {
        res.status(500).json({ error: "Unable to fetch news" });
    }
};
exports.getNewsByName = getNewsByName;
const getNewsByCategory = async (req, res) => {
    const { category } = req.params;
    try {
        const news = await News_1.default.findOne({
            where: { category },
            order: [['date', 'DESC']]
        });
        if (!news) {
            res.status(404).json({ error: "News not found" });
            return;
        }
        res.status(200).json(news);
    }
    catch (error) {
        console.error("Error fetching news:", error);
        res.status(500).json({ error });
    }
};
exports.getNewsByCategory = getNewsByCategory;
