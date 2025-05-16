import vendasService from "./vendas.service.js";

async function create(req, res) {
  const { cliente_id, data_venda, itens } = req.body;

  if (!data_venda || !Array.isArray(itens) || itens.length === 0) {
    return res.status(400).json({ message: "Dados da venda inválidos!" });
  }

  const result = await vendasService.registrarVenda({ cliente_id, data_venda, itens });
  res.status(201).json(result);
}

async function getAll(req, res) {
  const result = await vendasService.listarVendas();
  res.status(200).json({ data: result });
}

async function getItens(req, res) {
  const { vendaId } = req.params;
  const result = await vendasService.listarItens(vendaId);
  res.status(200).json({ data: result });
}

export default {
  create,
  getAll,
  getItens
};
