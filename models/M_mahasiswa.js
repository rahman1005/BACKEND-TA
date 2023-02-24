import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Prodi from "./M_prodi.js";
import kotaKabupaten from "./M_kotaKabupaten.js";
import asalSekolah from "./M_asalSekolah.js";
import statusBeasiswa from "./M_statusBeasiswa.js";
import statusPesantren from "./M_statusPesantren.js";


const {DataTypes}= Sequelize;

const Mahasiswa = db.define('mahasiswa',{
    uuid:{
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    nama:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    nim:{
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
    },
    prodiId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            notEmpty: true,
        }
    },
    statusBeasiswaId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            notEmpty: true,
        }
    },
    statusPesantrenId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            notEmpty: true,
        }
    },
    kotaKabupatenId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            notEmpty: true,
        }
    },
    sekolahId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            notEmpty: true,
        }
    }

},{
    freezeTableName: true
});
Prodi.hasMany(Mahasiswa);
Mahasiswa.belongsTo(Prodi, {foreignKey:'prodiId'});
statusBeasiswa.hasMany(Mahasiswa);
Mahasiswa.belongsTo(statusBeasiswa, {foreignKey:'statusBeasiswaId'});
statusPesantren.hasMany(Mahasiswa);
Mahasiswa.belongsTo(statusPesantren, {foreignKey:'statusPesantrenId'});
kotaKabupaten.hasMany(Mahasiswa);
Mahasiswa.belongsTo(kotaKabupaten, {foreignKey:'kotaKabupatenId'});
asalSekolah.hasMany(Mahasiswa);
Mahasiswa.belongsTo(asalSekolah, {foreignKey:'asalSekolahId'});

export default Mahasiswa;