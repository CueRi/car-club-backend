"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const newsController_1 = require("../controllers/newsController");
const authMiddleware_1 = require("../middleware/authMiddleware");
const router = (0, express_1.Router)();
router.post("/", authMiddleware_1.authenticateToken, newsController_1.createNews);
router.get("/", newsController_1.getAllNews);
router.put("/:id", authMiddleware_1.authenticateToken, newsController_1.updateNews);
router.delete("/:id", authMiddleware_1.authenticateToken, newsController_1.deleteNews);
router.get("/:id", newsController_1.getNewsById);
router.get("/category/:category", newsController_1.getNewsByCategory);
exports.default = router;