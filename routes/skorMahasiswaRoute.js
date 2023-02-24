import  express   from "express";
import { getSkorMahasiswa, getSkorMahasiswaById, createSkorMahasiswa, updateSkorMahasiswa, deleteSkorMahasiswa } from "../controllers/skorMahasiswa.js";
const router = express.Router();

router.get('/skorMahasiswa',getSkorMahasiswa);
router.get('/skorMahasiswa/:id',getSkorMahasiswaById);
router.post('/skorMahasiswa/',createSkorMahasiswa);
router.patch('/skorMahasiswa/:id',updateSkorMahasiswa);
router.delete('/skorMahasiswa/:id',deleteSkorMahasiswa);

export default router;