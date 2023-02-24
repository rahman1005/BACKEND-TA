import  express   from "express";
import { getHasil, getHasilById, createHasil, updateHasil, deleteHasil } from "../controllers/hasil.js";
const router = express.Router();

router.get('/hasil',getHasil);
router.get('/hasil/:id',getHasilById);
router.post('/hasil/',createHasil);
router.patch('/hasil/:id',updateHasil);
router.delete('/hasil/:id',deleteHasil);

export default router;