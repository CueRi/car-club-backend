"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAdminCount = exports.getAllAdmins = exports.deleteAdmin = exports.loginAdmin = exports.createAdmin = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const Admin_1 = __importDefault(require("../models/Admin"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const JWT_SECRET = process.env.JWT_SECRET || "secret";
const createAdmin = async (req, res) => {
    const { username, password } = req.body;
    try {
        const hashedPassword = await bcrypt_1.default.hash(password, 10);
        const admin = await Admin_1.default.create({ username, password: hashedPassword });
        res.status(201).json({ id: admin.id, username: admin.username });
    }
    catch (error) {
        res.status(500).json({ error: "Failed to create admin! Please try different username" });
    }
};
exports.createAdmin = createAdmin;
const loginAdmin = async (req, res) => {
    const { username, password } = req.body;
    try {
        const admin = await Admin_1.default.findOne({ where: { username } });
        if (!admin) {
            res.status(404).json({ error: "Admin not found" });
            return;
        }
        const isMatch = await bcrypt_1.default.compare(password, admin.password);
        if (!isMatch) {
            res.status(403).json({ error: "Invalid credentials" });
            return;
        }
        const token = jsonwebtoken_1.default.sign({ id: admin.id }, JWT_SECRET, { expiresIn: "72h" });
        res.json({ token });
        return;
    }
    catch (error) {
        res.status(500).json({ error: "Failed to login" });
        return;
    }
};
exports.loginAdmin = loginAdmin;
const deleteAdmin = async (req, res) => {
    const { id } = req.params;
    try {
        const count = await Admin_1.default.count();
        if (count === 1) {
            res.status(403).json({ error: "Cannot delete the only admin" });
            return;
        }
        await Admin_1.default.destroy({ where: { id } });
        res.status(204).send();
    }
    catch (error) {
        res.status(500).json({ error: "Failed to delete admin" });
    }
};
exports.deleteAdmin = deleteAdmin;
const getAllAdmins = async (_req, res) => {
    try {
        const admins = await Admin_1.default.findAll({ attributes: ["id", "username"] });
        res.status(200).json(admins);
    }
    catch (error) {
        res.status(500).json({ error: "Failed to fetch admins" });
    }
};
exports.getAllAdmins = getAllAdmins;
const getAdminCount = async (_req, res) => {
    try {
        const count = await Admin_1.default.count();
        res.status(200).json({ count });
    }
    catch (error) {
        res.status(500).json({ error: "Failed to fetch admin count" });
    }
};
exports.getAdminCount = getAdminCount;
