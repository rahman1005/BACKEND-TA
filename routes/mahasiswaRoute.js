import  express   from "express";
import { getMahasiswa, getMahasiswaById, createMahasiswa, updateMahasiswa, deleteMahasiswa } from "../controllers/mahasiswa.js";
const router = express.Router();

router.get('/mahasiswa',getMahasiswa);
router.get('/mahasiswa/:id',getMahasiswaById);
router.post('/mahasiswa/',createMahasiswa);
router.patch('/mahasiswa/:id',updateMahasiswa);
router.delete('/mahasiswa/:id',deleteMahasiswa);

export default router;