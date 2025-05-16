import { connection } from "../database/config.js";

async function create({ produto_id, quantidade, unidade, minimo, validade }) {
  const query = `
    INSERT INTO estoque (produto_id, quantidade, unidade, minimo, validade)
    VALUES (?, ?, ?, ?, ?);
  `;
  const [result] = await connection.query(query, [produto_id, quantidade, unidade, minimo, validade]);
  return result;
}

async function getAll() {
  const query = `
    SELECT e.*, p.nome AS produto_nome 
    FROM estoque e
    JOIN produtos p ON p.id = e.produto_id;
  `;
  const [result] = await connection.query(query);
  return result;
}

async function getById(id) {
  const query = `
  SELECT e.*, p.nome AS produto_nome 
  FROM estoque e 
  JOIN produtos p ON p.id = e.produto_id
  WHERE e.id = ?;`;
  const [result] = await connection.query(query, [id]);
  return result;
}

async function update(id, dados) {
  const query = `
    UPDATE estoque SET produto_id = ?, quantidade = ?, unidade = ?, minimo = ?, validade = ?
    WHERE id = ?;
  `;
  const [result] = await connection.query(query, [
    dados.produto_id,
    dados.quantidade,
    dados.unidade,
    dados.minimo,
    dados.validade,
    id
  ]);
  return result;
}

async function deleteEstoque(id) {
  const query = `DELETE FROM estoque WHERE id = ?;`;
  const [result] = await connection.query(query, [id]);
  return result;
}

async function reduzirEstoque(produto_id, quantidade) {
  const query = `
    UPDATE estoque 
    SET quantidade = quantidade - ?
    WHERE produto_id = ? AND quantidade >= ?;
  `;
  const [result] = await connection.query(query, [quantidade, produto_id, quantidade]);
  return result;
}

export default {
  create,
  getAll,
  getById,
  update,
  deleteEstoque,
  reduzirEstoque
};
