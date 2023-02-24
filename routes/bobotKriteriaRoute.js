import  express   from "express";
import { getBobotKriteria,getBobotKriteriaById, createBobotKriteria, deleteBobotKriteria, updateBobotKriteria } from "../controllers/bobotKriteria.js";
const router = express.Router();

router.get('/bobot',getBobotKriteria);
router.get('/bobot/:id',getBobotKriteriaById);
router.post('/bobot/',createBobotKriteria);
router.patch('/bobot/:id',updateBobotKriteria);
router.delete('/bobot/:id',deleteBobotKriteria);

export default router;