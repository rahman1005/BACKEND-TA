import { Sequelize } from "sequelize";
import db from "../config/Database.js";


const {DataTypes}= Sequelize;

const Provinsi = db.define('provinsi',{
    uuid:{
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    provinsi:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true,
            len:[3, 100]
        }
    },
},{
    freezeTableName: true
});

export default Provinsi;