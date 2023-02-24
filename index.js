import express  from "express";
import cors from "cors";
import session from "express-session";
import dotenv from "dotenv";
import SequelizeStore from "connect-session-sequelize" 
import db from "./config/Database.js";


import adminRoute from './routes/adminRoute.js'
import asalSekolahRoute from './routes/asalSekolahRoute.js'
import bobotKriteriaRoute from './routes/bobotKriteriaRoute.js'
import fakultasRoute from './routes/fakultasRoute.js'
import hasilRoute from './routes/hasilRoute.js'
import jenisKriteriaRoute from './routes/jenisKriteriaRoute.js'
import kotaKabupatenRoute from './routes/kotaKabupatenRoute.js'
import kriteriaRoute from './routes/kriteriaRoute.js'
import mahasiswaRoute from './routes/mahasiswaRoute.js'
import prodiRoute from './routes/prodiRoute.js'
import provinsiRoute from './routes/provinsiRoute.js'
import skorKriteriaRoute from './routes/skorKriteriaRoute.js'
import skorMahasiswaRoute from './routes/skorMahasiswaRoute.js'
import statusBeasiswaRoute from './routes/statusBeasiswaRoute.js'
import statusPesantrenRoute from './routes/statusPesantrenRoute.js'
import statusSekolahRoute from './routes/statusSekolahRoute.js'
import Auth from './routes/authRoute.js'

dotenv.config()


const app = express();

const sessionStore = SequelizeStore(session.Store);

const store = new sessionStore({
    db:db
});
(async()=>{
    await db.sync();
})();

app.use(cors({
    credentials:true,
    origin: 'http://localhost:3000'
}));

app.use(session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized:true,
    store:store,
    cookie: {
        secure: 'auto'

    }
}));

app.use(express.json());
app.use('/public',express.static('public'));
app.use(adminRoute);
app.use(asalSekolahRoute);
app.use(bobotKriteriaRoute);
app.use(fakultasRoute);
app.use(hasilRoute);
app.use(jenisKriteriaRoute);
app.use(kotaKabupatenRoute);
app.use(kriteriaRoute);
app.use(mahasiswaRoute);
app.use(prodiRoute);
app.use(provinsiRoute);
app.use(skorKriteriaRoute);
app.use(skorMahasiswaRoute);
app.use(statusBeasiswaRoute);
app.use(statusPesantrenRoute);
app.use(statusSekolahRoute);
app.use(Auth);

app.listen(process.env.APP_PORT,()=>{
    console.log('Server is running... ')
})