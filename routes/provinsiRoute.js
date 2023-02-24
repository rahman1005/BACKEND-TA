import  express   from "express";
import { getProvinsi, getProvinsiById, createProvinsi, updateProvinsi, deleteProvinsi } from "../controllers/provinsi.js";
const router = express.Router();

router.get('/provinsi',getProvinsi);
router.get('/provinsi/:id',getProvinsiById);
router.post('/provinsi/',createProvinsi);
router.patch('/provinsi/:id',updateProvinsi);
router.delete('/provinsi/:id',deleteProvinsi);

export default router;