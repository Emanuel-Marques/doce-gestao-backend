import fornecedoresService from './fornecedores.service.js';

async function create(req, res) {
  const { nome, telefone, email, endereco } = req.body;

  if (!nome || !telefone || !email || !endereco) {
    return res.status(400).json({ message: "Todos os campos são obrigatórios!" });
  }

  const fornecedor = { nome, telefone, email, endereco };
  const { insertId } = await fornecedoresService.create(fornecedor);
  res.status(201).json({ insertId });
}

async function getAll(req, res) {
  const result = await fornecedoresService.getAll();
  res.status(200).json({ data: result });
}

async function getById(req, res) {
  const { fornecedorId } = req.params;
  if (!fornecedorId || isNaN(fornecedorId)) {
    return res.status(400).json({ message: "ID inválido!" });
  }

  const result = await fornecedoresService.getById(fornecedorId);
  if (result.length === 0) {
    return res.status(404).json({ message: "Fornecedor não encontrado!" });
  }

  res.status(200).json({ data: result });
}

async function update(req, res) {
  const { fornecedorId } = req.params;
  const { nome, telefone, email, endereco } = req.body;

  if (!fornecedorId || isNaN(fornecedorId) || !nome || !telefone || !email || !endereco) {
    return res.status(400).json({ message: "ID ou campos obrigatórios ausentes!" });
  }

  const fornecedorExistente = await fornecedoresService.getById(fornecedorId);
  if (fornecedorExistente.length === 0) {
    return res.status(404).json({ message: "Fornecedor não encontrado!" });
  }

  await fornecedoresService.update(fornecedorId, { nome, telefone, email, endereco });
  res.status(204).json();
}

async function deleteFornecedor(req, res) {
  const { fornecedorId } = req.params;
  if (!fornecedorId || isNaN(fornecedorId)) {
    return res.status(400).json({ message: "ID inválido!" });
  }

  const fornecedor = await fornecedoresService.getById(fornecedorId);
  if (fornecedor.length === 0) {
    return res.status(404).json({ message: "Fornecedor não encontrado!" });
  }

  await fornecedoresService.deleteFornecedor(fornecedorId);
  res.status(204).json();
}

async function getWithProdutos(req, res) {
  const result = await fornecedoresService.getWithProdutos();
  res.status(200).json({ data: result });
}

export default {
  create,
  getAll,
  getById,
  update,
  deleteFornecedor,
  getWithProdutos,
};
