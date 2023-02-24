import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Fakultas from "./M_fakultas.js";

const {DataTypes}= Sequelize;

const Prodi = db.define('prodi',{
    uuid:{
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    prodi:{
            type: DataTypes.STRING,
            allowNull: false,
    },
    fakultasId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            notEmpty: true,
        }
    }
},{
    freezeTableName: true
});

Fakultas.hasMany(Prodi);
Prodi.belongsTo(Fakultas, {foreignKey:'fakultasId'});

export default Prodi;