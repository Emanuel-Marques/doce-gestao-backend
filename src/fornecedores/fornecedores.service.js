import fornecedoresModel from './fornecedores.model.js';

async function create(fornecedor) {
  return await fornecedoresModel.create(fornecedor);
}

async function getAll() {
  return await fornecedoresModel.getAll();
}

async function getById(id) {
  return await fornecedoresModel.getById(id);
}

async function update(id, fornecedor) {
  return await fornecedoresModel.update(id, fornecedor);
}

async function deleteFornecedor(id) {
  return await fornecedoresModel.deleteFornecedor(id);
}

async function getWithProdutos() {
  return await fornecedoresModel.getWithProdutos();
}

export default {
  create,
  getAll,
  getById,
  update,
  deleteFornecedor,
  getWithProdutos,
};
