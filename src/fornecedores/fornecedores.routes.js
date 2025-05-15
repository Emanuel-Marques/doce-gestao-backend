// src/routes/fornecedores.routes.js
import express from 'express';
const router = express.Router();
import fornecedoresController from './fornecedores.controller.js';

router.get('/', fornecedoresController.getAll);
router.get('/com-produtos', fornecedoresController.getWithProdutos);
router.get('/:fornecedorId', fornecedoresController.getById);
router.post('/cadastrar', fornecedoresController.create);
router.put('/actualizar/:fornecedorId', fornecedoresController.update);
router.delete('/apagar/:fornecedorId', fornecedoresController.deleteFornecedor);

export default router;
