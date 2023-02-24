import  express   from "express";
import { getFakultas, getFakultasById, createFakultas, updateFakultas, deleteFakultas } from "../controllers/fakultas.js";
const router = express.Router();

router.get('/fakultas',getFakultas);
router.get('/fakultas/:id',getFakultasById);
router.post('/fakultas/',createFakultas);
router.patch('/fakultas/:id',updateFakultas);
router.delete('/fakultas/:id',deleteFakultas);

export default router;