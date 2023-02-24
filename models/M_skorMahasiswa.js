import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Mahasiswa from "./M_mahasiswa.js";
import Kriteria from "./M_kriteria.js";
import skorKriteria from "./M_skorKriteria.js";


const {DataTypes}= Sequelize;

const skorMahasiswa = db.define('skorMahasiswa',{
    uuid:{
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    kriteriaId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            notEmpty: true,
        }
    },
    skorKriteriaId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            notEmpty: true,
        }
    },
    mahasiswaId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            notEmpty: true,
        }
    }

},{
    freezeTableName: true
});
Kriteria.hasMany(skorMahasiswa);
skorMahasiswa.belongsTo(Kriteria,{foreignKey:'kriteriaId'});
Mahasiswa.hasMany(skorMahasiswa);
skorMahasiswa.belongsTo(Mahasiswa,{foreignKey:'mahasiswaId'});
skorKriteria.hasMany(skorMahasiswa);
skorMahasiswa.belongsTo(skorKriteria,{foreignKey:'skorKriteriaId'});
export default skorMahasiswa;