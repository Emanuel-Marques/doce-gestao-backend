import express from 'express';
const router = express.Router();
import clientesController from './clientes.controller.js';

router.get('/', clientesController.getAll);
router.get('/:clienteId', clientesController.getById);
router.post('/cadastrar', clientesController.create);
router.put('/actualizar/:clienteId', clientesController.update);
router.delete('/apagar/:clienteId', clientesController.deleteCliente);

export default router;
