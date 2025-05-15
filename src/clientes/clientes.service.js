import clientesModel from "./clientes.model.js";

async function create(cliente) {
  return await clientesModel.create(cliente);
}

async function getAll() {
  return await clientesModel.getAll();
}

async function getById(id) {
  return await clientesModel.getById(id);
}

async function update(id, cliente) {
  return await clientesModel.update(id, cliente);
}

async function deleteCliente(id) {
  return await clientesModel.deleteCliente(id);
}

export default {
  create,
  getAll,
  getById,
  update,
  deleteCliente,
};
