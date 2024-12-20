"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const galleryController_1 = require("../controllers/galleryController");
const authMiddleware_1 = require("../middleware/authMiddleware");
const router = (0, express_1.Router)();
router.post("/", authMiddleware_1.authenticateToken, galleryController_1.createGallery);
router.get("/", galleryController_1.getAllGalleries);
router.put("/:id", authMiddleware_1.authenticateToken, galleryController_1.updateGallery);
router.delete("/:id", authMiddleware_1.authenticateToken, galleryController_1.deleteGallery);
exports.default = router;
