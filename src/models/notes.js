
import Sequelize, { DataTypes, Model } from "sequelize";

import { con } from '../config';

export let sequelize = new Sequelize(con.database, con.username, con.password, con);

 const noteType = {
   id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
   key: DataTypes.STRING,
   title: DataTypes.STRING,
   body: DataTypes.STRING
 };

export default class Note extends Model {
  static init(sequelize) {
    return super.init(
      noteType,
      {
        sequelize: sequelize,
        timestamps: false,
        createdAt: false,
        updatedAt: false,
        tableName: "demo"
      }
    );
  }
}

