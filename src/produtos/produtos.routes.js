import express from 'express';
const router = express.Router();
import produtosController from './produtos.controller.js';

router.get('/', produtosController.getAll);
router.get('/:produtoId', produtosController.getById);
router.post('/cadastrar', produtosController.create);
router.put('/actualizar/:produtoId', produtosController.update);
router.delete('/apagar/:produtoId', produtosController.deleteProduto);

export default router;
