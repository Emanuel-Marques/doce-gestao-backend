import { connection } from "../database/config.js";

async function create({
  vaga_id,
  candidato_nome,
  email,
  telefone,
  experiencia,
  status,
  data_envio
}) {
  const query = `
    INSERT INTO candidaturas (vaga_id, candidato_nome, email, telefone, experiencia, status, data_envio)
    VALUES (?, ?, ?, ?, ?, ?, ?);
  `;
  const [result] = await connection.query(query, [
    vaga_id,
    candidato_nome,
    email,
    telefone,
    experiencia,
    status,
    data_envio
  ]);
  return result;
}

async function getAll() {
  const query = `
    SELECT c.*, v.titulo AS vaga_titulo
    FROM candidaturas c
    LEFT JOIN vagas v ON c.vaga_id = v.id;
  `;
  const [result] = await connection.query(query);
  return result;
}

async function getById(candidaturaId) {
  const query = `
    SELECT c.*, v.titulo AS vaga_titulo
    FROM candidaturas c
    LEFT JOIN vagas v ON c.vaga_id = v.id
    WHERE c.id = ?;
  `;
  const [result] = await connection.query(query, [candidaturaId]);
  return result;
}

async function update(candidaturaId, {
  vaga_id,
  candidato_nome,
  email,
  telefone,
  experiencia,
  status
}) {
  const query = `
    UPDATE candidaturas
    SET vaga_id = ?, candidato_nome = ?, email = ?, telefone = ?, experiencia = ?, status = ?
    WHERE id = ?;
  `;
  const [result] = await connection.query(query, [
    vaga_id,
    candidato_nome,
    email,
    telefone,
    experiencia,
    status,
    candidaturaId
  ]);
  return result;
}

async function deleteCandidatura(candidaturaId) {
  const query = `DELETE FROM candidaturas WHERE id = ?;`;
  const [result] = await connection.query(query, [candidaturaId]);
  return result;
}

export default {
  create,
  getAll,
  getById,
  update,
  deleteCandidatura,
};
