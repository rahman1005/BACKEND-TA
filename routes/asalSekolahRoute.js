import  express   from "express";
import {getAsalSekolah, getasalSekolahById,createAsalSekolah, updateAsalSekolah, deleteAsalSekolah} from '../controllers/asalSekolah.js';
const router = express.Router();

router.get('/asalsekolah',getAsalSekolah);
router.get('/asalsekolah/:id',getasalSekolahById);
router.post('/asalsekolah/',createAsalSekolah);
router.patch('/asalsekolah/:id',updateAsalSekolah);
router.delete('/asalsekolah/:id',deleteAsalSekolah);

export default router;