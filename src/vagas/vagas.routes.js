// src/routes/vagas.routes.js
import express from 'express';
const router = express.Router();
import vagasController from './vagas.controller.js';

router.get('/', vagasController.getAll);
router.get('/:vagaId', vagasController.getById);
router.post('/cadastrar', vagasController.create);
router.put('/actualizar/:vagaId', vagasController.update);
router.delete('/apagar/:vagaId', vagasController.deleteVaga);

export default router;
