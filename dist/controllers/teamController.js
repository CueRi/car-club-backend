"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTeamMember = exports.updateTeamMember = exports.getAllTeamMembers = exports.createTeamMember = void 0;
const TeamMember_1 = __importDefault(require("../models/TeamMember"));
const createTeamMember = async (req, res) => {
    try {
        const teamMember = await TeamMember_1.default.create(req.body);
        res.status(201).json(teamMember);
    }
    catch (error) {
        res.status(500).json({ error: "Unable to create team member" });
    }
};
exports.createTeamMember = createTeamMember;
const getAllTeamMembers = async (_req, res) => {
    try {
        const teamMembers = await TeamMember_1.default.findAll();
        res.status(200).json(teamMembers);
    }
    catch (error) {
        if (!res.headersSent) {
            res.status(500).json({ error: "Unable to fetch team members" });
        }
    }
};
exports.getAllTeamMembers = getAllTeamMembers;
const updateTeamMember = async (req, res) => {
    const { id } = req.params;
    try {
        await TeamMember_1.default.update(req.body, { where: { id } });
        const updatedTeamMember = await TeamMember_1.default.findByPk(id);
        res.status(200).json(updatedTeamMember);
    }
    catch (error) {
        res.status(500).json({ error: "Unable to update team member" });
    }
};
exports.updateTeamMember = updateTeamMember;
const deleteTeamMember = async (req, res) => {
    const { id } = req.params;
    try {
        await TeamMember_1.default.destroy({ where: { id } });
        res.status(204).send();
    }
    catch (error) {
        res.status(500).json({ error: "Unable to delete team member" });
    }
};
exports.deleteTeamMember = deleteTeamMember;
