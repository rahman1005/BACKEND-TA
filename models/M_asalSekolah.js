import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import statusSekolah from "./M_statusSekolah.js";

const {DataTypes}= Sequelize;

const asalSekolah = db.define('asal_sekolah',{
    uuid:{
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    namaSekolah:{
        type: DataTypes.STRING,
        allowNull: false,

    },
    statusSekolahId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            notEmpty: true,
        }
    }
    
},{
    freezeTableName: true
});
statusSekolah.hasMany(asalSekolah);
asalSekolah.belongsTo(statusSekolah,{foreignKey:"statusSekolahId"});
export default asalSekolah;