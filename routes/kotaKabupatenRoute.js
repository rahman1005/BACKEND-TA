import  express   from "express";
import { getKotaKabupaten, getKotaKabupatenById, createKotaKabupaten, updateKotaKabupaten, deleteKotaKabupaten } from "../controllers/kotaKabupaten.js";
const router = express.Router();

router.get('/kotaKabupaten',getKotaKabupaten);
router.get('/kotaKabupaten/:id',getKotaKabupatenById);
router.post('/kotaKabupaten/',createKotaKabupaten);
router.patch('/kotaKabupaten/:id',updateKotaKabupaten);
router.delete('/kotaKabupaten/:id',deleteKotaKabupaten);

export default router;