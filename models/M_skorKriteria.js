import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Kriteria from "./M_kriteria.js";

const {DataTypes}= Sequelize;

const skorKriteria = db.define('skor_kriteria',{
    uuid:{
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    skor:{
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    kriteriaId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            notEmpty: true,
        }
    }
},{
    freezeTableName: true
});
Kriteria.hasMany(skorKriteria);
skorKriteria.belongsTo(Kriteria,{foreignKey:'kriteriaId'});
export default skorKriteria;