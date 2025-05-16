import express from 'express';
const router = express.Router();
import candidaturasController from './candidaturas.controller.js';
import { authMiddleware } from '../middlewares/index.js';

router.post('/cadastrar', candidaturasController.create);
router.use(authMiddleware);
router.get('/', candidaturasController.getAll);
router.get('/:candidaturaId', candidaturasController.getById);
router.put('/actualizar/:candidaturaId', candidaturasController.update);
router.delete('/apagar/:candidaturaId', candidaturasController.deleteCandidatura);

export default router;
