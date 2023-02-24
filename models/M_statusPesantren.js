import { Sequelize } from "sequelize";
import db from "../config/Database.js";


const {DataTypes}= Sequelize;

const statusPesantren = db.define('status_pesantren',{
    uuid:{
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    status_pesantren:{
        type: DataTypes.STRING,
        allowNull: false,
    }
},{
    freezeTableName: true
});

export default statusPesantren;