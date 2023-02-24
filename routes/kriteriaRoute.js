import  express   from "express";
import { getKriteria, getKriteriaById, createKriteria, updateKriteria, deleteKriteria } from "../controllers/kriteria.js";
const router = express.Router();

router.get('/kriteria',getKriteria);
router.get('/kriteria/:id',getKriteriaById);
router.post('/kriteria/',createKriteria);
router.patch('/kriteria/:id',updateKriteria);
router.delete('/kriteria/:id',deleteKriteria);

export default router;