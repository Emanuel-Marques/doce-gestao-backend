import { connection } from "../database/config.js";

async function create({ nome, telefone, email, endereco }) {
  const query = `
    INSERT INTO fornecedores (nome, telefone, email, endereco)
    VALUES (?, ?, ?, ?);
  `;
  const [result] = await connection.query(query, [nome, telefone, email, endereco]);
  return result;
}

async function getAll() {
  const query = `SELECT * FROM fornecedores;`;
  const [result] = await connection.query(query);
  return result;
}

async function getById(fornecedorId) {
  const query = `SELECT * FROM fornecedores WHERE id = ?;`;
  const [result] = await connection.query(query, [fornecedorId]);
  return result;
}

async function update(fornecedorId, { nome, telefone, email, endereco }) {
  const query = `
    UPDATE fornecedores 
    SET nome = ?, telefone = ?, email = ?, endereco = ? 
    WHERE id = ?;
  `;
  const [result] = await connection.query(query, [nome, telefone, email, endereco, fornecedorId]);
  return result;
}

async function deleteFornecedor(fornecedorId) {
  const query = `DELETE FROM fornecedores WHERE id = ?;`;
  const [result] = await connection.query(query, [fornecedorId]);
  return result;
}

async function getWithProdutos() {
  const query = `
    SELECT 
      f.id AS fornecedor_id,
      f.nome AS fornecedor_nome,
      f.telefone,
      f.email,
      f.endereco,
      p.id AS produto_id,
      p.nome AS produto_nome,
      p.preco,
      p.categoria,
      p.unidade
    FROM fornecedores f
    LEFT JOIN produtos p ON p.fornecedor_id = f.id
    ORDER BY f.id;
  `;
  const [result] = await connection.query(query);
  return result;
}

export default {
  create,
  getAll,
  getById,
  update,
  deleteFornecedor,
  getWithProdutos,
};
