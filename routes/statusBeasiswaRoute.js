import  express   from "express";
import { getStatusBeasiswa, getStatusBeasiswaById, createStatusBeasiswa, updateStatusBeasiswa, deleteStatusBeasiswa } from "../controllers/statusBeasiswa.js";
const router = express.Router();

router.get('/statusBeasiswa',getStatusBeasiswa);
router.get('/statusBeasiswa/:id',getStatusBeasiswaById);
router.post('/statusBeasiswa/',createStatusBeasiswa);
router.patch('/statusBeasiswa/:id',updateStatusBeasiswa);
router.delete('/statusBeasiswa/:id',deleteStatusBeasiswa);

export default router;