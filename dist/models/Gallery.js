"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const databaseConfig_1 = require("../config/databaseConfig");
class Gallery extends sequelize_1.Model {
}
Gallery.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    event: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
    images: {
        type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.STRING),
        allowNull: false,
    },
}, {
    sequelize: databaseConfig_1.sequelize,
    modelName: "Gallery",
    tableName: "galleries",
    timestamps: false,
});
exports.default = Gallery;
