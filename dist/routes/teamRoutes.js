"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const teamController_1 = require("../controllers/teamController");
const authMiddleware_1 = require("../middleware/authMiddleware");
const router = (0, express_1.Router)();
router.post("/", authMiddleware_1.authenticateToken, teamController_1.createTeamMember);
router.get("/", teamController_1.getAllTeamMembers);
router.put("/:id", authMiddleware_1.authenticateToken, teamController_1.updateTeamMember);
router.delete("/:id", authMiddleware_1.authenticateToken, teamController_1.deleteTeamMember);
exports.default = router;
