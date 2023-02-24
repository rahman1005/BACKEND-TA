import { Sequelize } from "sequelize";
import db from "../config/Database.js";


const {DataTypes}= Sequelize;

const statusBeasiswa = db.define('status_beasiswa',{
    uuid:{
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    status_beasiswa:{
        type: DataTypes.STRING,
        allowNull: false,
    }
},{
    freezeTableName: true
});

export default statusBeasiswa;