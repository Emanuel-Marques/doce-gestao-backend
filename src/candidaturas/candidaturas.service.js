import candidaturasModel from "./candidaturas.model.js";

async function create(data) {
  return await candidaturasModel.create(data);
}

async function getAll() {
  return await candidaturasModel.getAll();
}

async function getById(id) {
  return await candidaturasModel.getById(id);
}

async function update(id, data) {
  return await candidaturasModel.update(id, data);
}

async function deleteCandidatura(id) {
  return await candidaturasModel.deleteCandidatura(id);
}

export default {
  create,
  getAll,
  getById,
  update,
  deleteCandidatura,
};
