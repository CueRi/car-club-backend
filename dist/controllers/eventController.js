"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteEvent = exports.updateEvent = exports.getAllEvents = exports.createEvent = void 0;
const Event_1 = __importDefault(require("../models/Event"));
const createEvent = async (req, res) => {
    try {
        const event = await Event_1.default.create(req.body);
        res.status(201).json(event);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
exports.createEvent = createEvent;
const getAllEvents = async (_req, res) => {
    try {
        const events = await Event_1.default.findAll();
        res.status(200).json(events);
    }
    catch (error) {
        res.status(500).json({ error: "Unable to fetch events" });
    }
};
exports.getAllEvents = getAllEvents;
const updateEvent = async (req, res) => {
    const { id } = req.params;
    try {
        await Event_1.default.update(req.body, { where: { id } });
        const updatedEvent = await Event_1.default.findByPk(id);
        res.status(200).json(updatedEvent);
    }
    catch (error) {
        res.status(500).json({ error: "Unable to update event" });
    }
};
exports.updateEvent = updateEvent;
const deleteEvent = async (req, res) => {
    const { id } = req.params;
    try {
        await Event_1.default.destroy({ where: { id } });
        res.status(204).send();
    }
    catch (error) {
        res.status(500).json({ error: "Unable to delete event" });
    }
};
exports.deleteEvent = deleteEvent;
