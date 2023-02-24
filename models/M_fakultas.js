import { Sequelize } from "sequelize";
import db from "../config/Database.js";


const {DataTypes}= Sequelize;

const Fakultas = db.define('fakultas',{
    uuid:{
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    namaFakultas:{
        type: DataTypes.STRING,
        allowNull: false,
    }
},{
    freezeTableName: true
});

export default Fakultas;