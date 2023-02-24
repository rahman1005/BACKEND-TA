import { Sequelize } from "sequelize";

const db= new Sequelize('spk', 'root', '',{
    host:"localhost",
    dialect:"mysql"
});

export default db;