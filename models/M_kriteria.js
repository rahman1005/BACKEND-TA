import { Sequelize } from "sequelize";
import db from "../config/Database.js";


const {DataTypes}= Sequelize;

const Kriteria = db.define('kriteria',{
    uuid:{
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    kriteria:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    sifat:{
        type: DataTypes.STRING,
        allowNull: false,
    },
},{
    freezeTableName: true
});

export default Kriteria;