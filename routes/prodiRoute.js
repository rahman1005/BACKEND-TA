import  express   from "express";
import { getProdi, getProdiById, createProdi, updateProdi, deleteProdi } from "../controllers/prodi.js";
const router = express.Router();

router.get('/prodi',getProdi);
router.get('/prodi/:id',getProdiById);
router.post('/prodi/',createProdi);
router.patch('/prodi/:id',updateProdi);
router.delete('/prodi/:id',deleteProdi);

export default router;