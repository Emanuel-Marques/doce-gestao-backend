import { connection } from "../database/config.js";

async function create({
  titulo,
  descricao,
  requisitos,
  responsabilidades,
  departamento,
  localidade,
  tipo,
  salario,
  status,
  data_criacao
}) {
  const query = `
    INSERT INTO vagas (titulo, descricao, requisitos, responsabilidades, departamento, localidade, tipo, salario, status, data_criacao)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
  `;
  const [result] = await connection.query(query, [
    titulo,
    descricao,
    requisitos,
    responsabilidades,
    departamento,
    localidade,
    tipo,
    salario,
    status,
    data_criacao
  ]);
  return result;
}

async function update(vagaId, {
  titulo,
  descricao,
  requisitos,
  responsabilidades,
  departamento,
  localidade,
  tipo,
  salario,
  status
}) {
  const query = `
    UPDATE vagas
    SET titulo = ?, descricao = ?, requisitos = ?, responsabilidades = ?, departamento = ?, localidade = ?, tipo = ?, salario = ?, status = ?
    WHERE id = ?;
  `;
  const [result] = await connection.query(query, [
    titulo,
    descricao,
    requisitos,
    responsabilidades,
    departamento,
    localidade,
    tipo,
    salario,
    status,
    vagaId
  ]);
  return result;
}


async function getAll() {
  const query = `SELECT * FROM vagas;`;
  const [result] = await connection.query(query);
  return result;
}

async function getById(vagaId) {
  const query = `SELECT * FROM vagas WHERE id = ?;`;
  const [result] = await connection.query(query, [vagaId]);
  return result;
}



async function deleteVaga(vagaId) {
  const query = `DELETE FROM vagas WHERE id = ?;`;
  const [result] = await connection.query(query, [vagaId]);
  return result;
}

export default {
  create,
  getAll,
  getById,
  update,
  deleteVaga,
};
