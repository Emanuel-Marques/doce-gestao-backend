import { encryptPassword } from "../utils/bcrypt.js";
import utilizadoresModel from "./utilizadores.model.js";

async function create(utilizador) {
  const senhaEncriptada = await encryptPassword(utilizador.senha);

  const utilizadorEncriptado = {
    nome: utilizador.nome,
    email: utilizador.email,
    senha: senhaEncriptada,
    cargo: utilizador.cargo,
    status: utilizador.status,
  };

  const result = await utilizadoresModel.create(utilizadorEncriptado);
  return result;
}

async function getAll() {
  const result = await utilizadoresModel.getAll();
  return result;
}

async function getById(utilizadorId) {
  const result = await utilizadoresModel.getById(utilizadorId);
  return result;
}

async function update(utilizadorId, nome, email, senha, cargo, status) {
  const senhaEncriptada = await encryptPassword(senha);
  const result = await utilizadoresModel.update(
    utilizadorId,
    nome,
    email,
    senhaEncriptada,
    cargo,
    status
  );
  return result;
}

async function deleteUtilizador(utilizadorId) {
  const result = await utilizadoresModel.deleteUtilizador(utilizadorId);
  return result;
}

async function getByEmail(email) {
  const result = await utilizadoresModel.getByEmail(email);
  return result;
}
export default {
  create,
  getAll,
  getById,
  update,
  deleteUtilizador,
  getByEmail,
};
