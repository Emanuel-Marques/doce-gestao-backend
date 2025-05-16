import vagasModel from "./vagas.model.js";

async function create(vaga) {
  return await vagasModel.create(vaga);
}

async function getAll() {
  return await vagasModel.getAll();
}

async function getById(id) {
  return await vagasModel.getById(id);
}

async function update(id, vaga) {
  return await vagasModel.update(id, vaga);
}

async function updateStatus(id, status) {
  return await vagasModel.updateStatus(id, status);
}

async function deleteVaga(id) {
  return await vagasModel.deleteVaga(id);
}

export default {
  create,
  getAll,
  getById,
  update,
  deleteVaga,
  updateStatus
};
