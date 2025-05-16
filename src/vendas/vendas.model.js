import { connection } from "../database/config.js";

async function createVenda({ cliente_id, data_venda, total }) {
  const query = `
    INSERT INTO vendas (cliente_id, data_venda, total)
    VALUES (?, ?, ?);
  `;
  const [result] = await connection.query(query, [cliente_id, data_venda, total]);
  return result;
}

async function createItemVenda({ venda_id, produto_id, quantidade, preco_unitario, total }) {
  const query = `
    INSERT INTO itens_venda (venda_id, produto_id, quantidade, preco_unitario, total)
    VALUES (?, ?, ?, ?, ?);
  `;
  const [result] = await connection.query(query, [venda_id, produto_id, quantidade, preco_unitario, total]);
  return result;
}

async function getAll() {
  const query = `
    SELECT v.*, c.nome AS cliente_nome
    FROM vendas v
    LEFT JOIN clientes c ON c.id = v.cliente_id;
  `;
  const [result] = await connection.query(query);
  return result;
}

async function getItensByVendaId(vendaId) {
  const query = `
    SELECT iv.*, p.nome AS produto_nome 
    FROM itens_venda iv
    JOIN produtos p ON p.id = iv.produto_id
    WHERE iv.venda_id = ?;
  `;
  const [result] = await connection.query(query, [vendaId]);
  return result;
}

export default {
  createVenda,
  createItemVenda,
  getAll,
  getItensByVendaId
};
