import express from 'express';
import utilizadoresRoutes from '../utilizadores/utilizadores.routes.js';
import produtosRoutes from '../produtos/produtos.routes.js';
import clientesRoutes from '../clientes/clientes.routes.js';
import fornecedoresRoutes from '../fornecedores/fornecedores.routes.js';
import authRoutes from '../auth/auth.routes.js';
import { authMiddleware } from '../middlewares/index.js';
const router = express.Router();

router.use('/auth', authRoutes);
router.use(authMiddleware);
router.use('/produtos', produtosRoutes);
router.use('/fornecedores', fornecedoresRoutes);
router.use('/clientes', clientesRoutes);
router.use('/utilizadores', utilizadoresRoutes);


export default router;