import { connection } from "../database/config.js";

async function create({ nome, preco, categoria, descricao, unidade, fornecedor_id }) {
  const query = `
    INSERT INTO produtos (nome, preco, categoria, descricao, unidade, fornecedor_id)
    VALUES (?, ?, ?, ?, ?, ?);
  `;
  const [result] = await connection.query(query, [
    nome,
    preco,
    categoria,
    descricao,
    unidade,
    fornecedor_id
  ]);
  return result;
}

async function getAll() {
  const query = `SELECT * FROM produtos;`;
  const [result] = await connection.query(query);
  return result;
}

async function getById(produtoId) {
  const query = `SELECT * FROM produtos WHERE id = ?;`;
  const [result] = await connection.query(query, [produtoId]);
  return result;
}

async function update(produtoId, { nome, preco, categoria, descricao, unidade, fornecedor_id }) {
  const query = `
    UPDATE produtos
    SET nome = ?, preco = ?, categoria = ?, descricao = ?, unidade = ?, fornecedor_id = ?
    WHERE id = ?;
  `;
  const [result] = await connection.query(query, [
    nome,
    preco,
    categoria,
    descricao,
    unidade,
    fornecedor_id,
    produtoId
  ]);
  return result;
}

async function deleteProduto(produtoId) {
  const query = `DELETE FROM produtos WHERE id = ?;`;
  const [result] = await connection.query(query, [produtoId]);
  return result;
}

export default {
  create,
  getAll,
  getById,
  update,
  deleteProduto,
};
