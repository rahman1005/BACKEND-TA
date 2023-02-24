import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Provinsi from "./M_provinsi.js";

const {DataTypes}= Sequelize;

const kotaKabupaten = db.define('kota_kabupaten',{
    uuid:{
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    kotaKabupaten:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true,
        }
    },
    provinsiId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            notEmpty: true,
        }
    },
    
},{
    freezeTableName: true
});
Provinsi.hasMany(kotaKabupaten);
kotaKabupaten.belongsTo(Provinsi,{foreignKey:'provinsiId'});
export default kotaKabupaten;