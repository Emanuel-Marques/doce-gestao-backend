import { connection } from "../database/config.js";

async function create({ nome, telefone, email, endereco }) {
  const query = `
    INSERT INTO clientes (nome, telefone, email, endereco)
    VALUES (?, ?, ?, ?);
  `;
  const [result] = await connection.query(query, [nome, telefone, email, endereco]);
  return result;
}

async function getAll() {
  const query = `SELECT * FROM clientes;`;
  const [result] = await connection.query(query);
  return result;
}

async function getById(clienteId) {
  const query = `SELECT * FROM clientes WHERE id = ?;`;
  const [result] = await connection.query(query, [clienteId]);
  return result;
}

async function update(clienteId, { nome, telefone, email, endereco }) {
  const query = `
    UPDATE clientes 
    SET nome = ?, telefone = ?, email = ?, endereco = ?
    WHERE id = ?;
  `;
  const [result] = await connection.query(query, [nome, telefone, email, endereco, clienteId]);
  return result;
}

async function deleteCliente(clienteId) {
  const query = `DELETE FROM clientes WHERE id = ?;`;
  const [result] = await connection.query(query, [clienteId]);
  return result;
}

export default {
  create,
  getAll,
  getById,
  update,
  deleteCliente,
};
