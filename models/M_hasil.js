import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Mahasiswa from "./M_mahasiswa.js";

const {DataTypes}= Sequelize;

const Hasil = db.define('hasil',{
    uuid:{
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    mahasiswaId:{
        type: DataTypes.INTEGER,
        allowNull: false,

    },
    hasil:{
        type: DataTypes.INTEGER,
        allowNull: true,
    }
},{
    freezeTableName: true
});

Mahasiswa.hasOne(Hasil);
Hasil.belongsTo(Mahasiswa,{foreignKey:'mahasiswaId'});
export default Hasil;