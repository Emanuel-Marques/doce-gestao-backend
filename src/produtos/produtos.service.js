import produtosModel from './produtos.model.js';

async function create(produto) {
  return await produtosModel.create(produto);
}

async function getAll() {
  return await produtosModel.getAll();
}

async function getById(id) {
  return await produtosModel.getById(id);
}

async function update(id, produto) {
  return await produtosModel.update(id, produto);
}

async function deleteProduto(id) {
  return await produtosModel.deleteProduto(id);
}

export default {
  create,
  getAll,
  getById,
  update,
  deleteProduto,
};
