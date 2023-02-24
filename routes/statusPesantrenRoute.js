import  express   from "express";
import { getStatusPesantren, getStatusPesantrenById, createStatusPesantren, updateStatusPesantren, deleteStatusPesantren } from "../controllers/statusPesantren.js";
const router = express.Router();

router.get('/statusPesantren',getStatusPesantren);
router.get('/statusPesantren/:id',getStatusPesantrenById);
router.post('/statusPesantren/',createStatusPesantren);
router.patch('/statusPesantren/:id',updateStatusPesantren);
router.delete('/statusPesantren/:id',deleteStatusPesantren);

export default router;