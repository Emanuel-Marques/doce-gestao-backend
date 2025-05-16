import express from 'express';
import utilizadoresRoutes from '../utilizadores/utilizadores.routes.js';
import produtosRoutes from '../produtos/produtos.routes.js';
import clientesRoutes from '../clientes/clientes.routes.js';
import fornecedoresRoutes from '../fornecedores/fornecedores.routes.js';
import vagasRoutes from '../vagas/vagas.routes.js';
import candidaturasRoutes from '../candidaturas/candidaturas.routes.js';
import vendasRoutes from '../vendas/vendas.routes.js';
import estoqueRoutes from '../estoque/estoque.routes.js';
import authRoutes from '../auth/auth.routes.js';
import { authMiddleware } from '../middlewares/index.js';
const router = express.Router();

router.use('/auth', authRoutes);
router.use('/vagas', vagasRoutes);
router.use('/candidaturas', candidaturasRoutes);
router.use(authMiddleware);
router.use('/vendas', vendasRoutes);
router.use('/estoque', estoqueRoutes);
router.use('/produtos', produtosRoutes);
router.use('/fornecedores', fornecedoresRoutes);
router.use('/clientes', clientesRoutes);
router.use('/utilizadores', utilizadoresRoutes);


export default router;