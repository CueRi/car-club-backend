"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const adminRoutes_1 = __importDefault(require("./adminRoutes"));
const eventRoutes_1 = __importDefault(require("./eventRoutes"));
const galleryRoutes_1 = __importDefault(require("./galleryRoutes"));
const newsRoutes_1 = __importDefault(require("./newsRoutes"));
const productRoutes_1 = __importDefault(require("./productRoutes"));
const teamRoutes_1 = __importDefault(require("./teamRoutes"));
const router = express_1.default.Router();
router.use('/admins', adminRoutes_1.default); // Routes for admin management
router.use('/events', eventRoutes_1.default); // Routes for event management
router.use('/galleries', galleryRoutes_1.default); // Routes for gallery management
router.use('/news', newsRoutes_1.default); // Routes for news management
router.use('/products', productRoutes_1.default); // Routes for product management
router.use('/team-members', teamRoutes_1.default); // Routes for team member management
exports.default = router;
