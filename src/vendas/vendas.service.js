import vendasModel from "./vendas.model.js";
import estoqueModel from "../estoque/estoque.model.js";

async function registrarVenda({ cliente_id, data_venda, itens }) {
  const totalVenda = itens.reduce((soma, item) => soma + item.total, 0);

  const { insertId: venda_id } = await vendasModel.createVenda({
    cliente_id,
    data_venda,
    total: totalVenda
  });

  for (const item of itens) {
    await vendasModel.createItemVenda({
      venda_id,
      produto_id: item.produto_id,
      quantidade: item.quantidade,
      preco_unitario: item.preco_unitario,
      total: item.total
    });

    await estoqueModel.reduzirEstoque(item.produto_id, item.quantidade);
  }

  return { venda_id };
}

async function listarVendas() {
  return await vendasModel.getAll();
}

async function listarItens(vendaId) {
  return await vendasModel.getItensByVendaId(vendaId);
}

export default {
  registrarVenda,
  listarVendas,
  listarItens
};
