import produtosService from './produtos.service.js';

async function create(req, res) {
  const { nome, preco, categoria, descricao, unidade, fornecedor_id } = req.body;

  if (!nome || !preco || !categoria || !descricao || !unidade || !fornecedor_id) {
    return res.status(400).json({ message: "Todos os campos são obrigatórios!" });
  }

  const produto = { nome, preco, categoria, descricao, unidade, fornecedor_id };
  const { insertId } = await produtosService.create(produto);
  res.status(201).json({ insertId });
}

async function getAll(req, res) {
  const result = await produtosService.getAll();
  res.status(200).json({ data: result });
}

async function getById(req, res) {
  const { produtoId } = req.params;
  if (!produtoId || isNaN(produtoId)) {
    return res.status(400).json({ message: "ID inválido!" });
  }

  const result = await produtosService.getById(produtoId);
  if (result.length === 0) {
    return res.status(404).json({ message: "Produto não encontrado!" });
  }

  res.status(200).json({ data: result });
}

async function update(req, res) {
  const { produtoId } = req.params;
  const { nome, preco, categoria, descricao, unidade, fornecedor_id } = req.body;

  if (!produtoId || isNaN(produtoId) || !nome || !preco || !categoria || !descricao || !unidade || !fornecedor_id) {
    return res.status(400).json({ message: "ID ou campos inválidos!" });
  }

  const produtoExistente = await produtosService.getById(produtoId);
  if (produtoExistente.length === 0) {
    return res.status(404).json({ message: "Produto não encontrado!" });
  }

  await produtosService.update(produtoId, { nome, preco, categoria, descricao, unidade, fornecedor_id });
  res.status(204).json();
}

async function deleteProduto(req, res) {
  const { produtoId } = req.params;
  if (!produtoId || isNaN(produtoId)) {
    return res.status(400).json({ message: "ID inválido!" });
  }

  const produto = await produtosService.getById(produtoId);
  if (produto.length === 0) {
    return res.status(404).json({ message: "Produto não encontrado!" });
  }

  await produtosService.deleteProduto(produtoId);
  res.status(204).json();
}

export default {
  create,
  getAll,
  getById,
  update,
  deleteProduto
};
