"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const databaseConfig_1 = require("../config/databaseConfig");
class Admin extends sequelize_1.Model {
}
Admin.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    username: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize: databaseConfig_1.sequelize,
    modelName: "Admin",
    tableName: "admins",
    timestamps: false,
});
exports.default = Admin;
