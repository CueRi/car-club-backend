import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/databaseConfig";

class Event extends Model {
  public id!: number;
  public title!: string;
  public description!: string;
  public date!: Date;
  public TIME!: TimeRanges;
  public venue!: string;
  public image!: string;
}

Event.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    time: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    venue: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Event",
    tableName: "events",
    timestamps: false,
  }
);

export default Event;
