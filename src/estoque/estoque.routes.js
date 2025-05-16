import express from 'express';
const router = express.Router();
import estoqueController from './estoque.controller.js';

router.get('/', estoqueController.getAll);
router.get('/:id', estoqueController.getById);
router.post('/registrar', estoqueController.create);
router.put('/actualizar/:id', estoqueController.update);

export default router;