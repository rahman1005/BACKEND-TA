import { Sequelize } from "sequelize";
import db from "../config/Database.js";


const {DataTypes}= Sequelize;

const jenisKriteria = db.define('jenis_kriteria',{
    uuid:{
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    jenisKriteria:{
        type: DataTypes.STRING,
        allowNull: false,
    }
},{
    freezeTableName: true
});

export default jenisKriteria;