"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const compression_1 = __importDefault(require("compression"));
const morgan_1 = __importDefault(require("morgan"));
const body_parser_1 = __importDefault(require("body-parser"));
const databaseConfig_1 = require("./config/databaseConfig");
const adminRoutes_1 = __importDefault(require("./routes/adminRoutes"));
const eventRoutes_1 = __importDefault(require("./routes/eventRoutes"));
const galleryRoutes_1 = __importDefault(require("./routes/galleryRoutes"));
const newsRoutes_1 = __importDefault(require("./routes/newsRoutes"));
const productRoutes_1 = __importDefault(require("./routes/productRoutes"));
const teamRoutes_1 = __importDefault(require("./routes/teamRoutes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:4173";
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use((0, compression_1.default)());
app.use((0, helmet_1.default)());
app.use((0, morgan_1.default)("dev"));
app.use((0, cors_1.default)({
    origin: FRONTEND_URL,
    credentials: true,
    exposedHeaders: ["Authorization"],
    allowedHeaders: ["Authorization", "Content-Type"],
    optionsSuccessStatus: 200,
}));
app.use("/public", express_1.default.static("public"));
app.use("/admins", adminRoutes_1.default);
app.use("/events", eventRoutes_1.default);
app.use("/galleries", galleryRoutes_1.default);
app.use("/news", newsRoutes_1.default);
app.use("/products", productRoutes_1.default);
app.use("/team-members", teamRoutes_1.default);
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: "Internal Server Error" });
});
const startServer = async () => {
    try {
        await databaseConfig_1.sequelize.authenticate();
        console.log("Database connected successfully.");
        await databaseConfig_1.sequelize.sync({ alter: true });
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    }
    catch (error) {
        console.error("Unable to connect to the database:", error);
    }
};
startServer();
