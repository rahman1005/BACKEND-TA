import  express   from "express";
import { getStatusSekolah, getStatusSekolahById, createStatusSekolah, updateStatusSekolah, deleteStatusSekolah } from "../controllers/statusSekolah.js";
const router = express.Router();

router.get('/statusSekolah',getStatusSekolah);
router.get('/statusSekolah/:id',getStatusSekolahById);
router.post('/statusSekolah/',createStatusSekolah);
router.patch('/statusSekolah/:id',updateStatusSekolah);
router.delete('/statusSekolah/:id',deleteStatusSekolah);

export default router;