import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Kriteria from "./M_kriteria.js";

const {DataTypes}= Sequelize;

const bobotKriteria = db.define('bobot_kriteria',{
    uuid:{
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    bobot:{
        type: DataTypes.STRING,
        allowNull: false,
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
Kriteria.hasOne(bobotKriteria);
bobotKriteria.belongsTo(Kriteria,{foreignKey:'kriteriaId'});

export default bobotKriteria;