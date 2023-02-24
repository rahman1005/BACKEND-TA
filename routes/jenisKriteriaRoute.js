import  express   from "express";
import { getJenisKriteria, getJenisKriteriaById, createJenisKriteria, updateJenisKriteria, deleteJenisKriteria } from "../controllers/jenisKriteria.js";
const router = express.Router();

router.get('/jenisKriteria',getJenisKriteria);
router.get('/jenisKriteria/:id',getJenisKriteriaById);
router.post('/jenisKriteria/',createJenisKriteria);
router.patch('/jenisKriteria/:id',updateJenisKriteria);
router.delete('/jenisKriteria/:id',deleteJenisKriteria);

export default router;