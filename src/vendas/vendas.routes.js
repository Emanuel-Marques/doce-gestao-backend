import express from 'express';
const router = express.Router();
import vendasController from './vendas.controller.js';

router.get('/', vendasController.getAll);
router.get('/:vendaId/itens', vendasController.getItens);
router.post('/registrar', vendasController.create);

export default router;
