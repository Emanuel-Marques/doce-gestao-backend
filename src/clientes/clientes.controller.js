import clientesService from "./clientes.service.js";

async function create(req, res) {
  const { nome, telefone, email, endereco } = req.body;

  if (!nome || !telefone || !email || !endereco) {
    return res.status(400).json({ message: "Todos os campos são obrigatórios!" });
  }

  const cliente = { nome, telefone, email, endereco };
  const { insertId } = await clientesService.create(cliente);
  res.status(201).json({ insertId });
}

async function getAll(req, res) {
  const result = await clientesService.getAll();
  res.status(200).json({ data: result });
}

async function getById(req, res) {
  const { clienteId } = req.params;
  if (!clienteId || isNaN(clienteId)) {
    return res.status(400).json({ message: "ID inválido!" });
  }

  const result = await clientesService.getById(clienteId);
  if (result.length === 0) {
    return res.status(404).json({ message: "Cliente não encontrado!" });
  }

  res.status(200).json({ data: result });
}

async function update(req, res) {
  const { clienteId } = req.params;
  const { nome, telefone, email, endereco } = req.body;

  if (!clienteId || isNaN(clienteId) || !nome || !telefone || !email || !endereco) {
    return res.status(400).json({ message: "ID ou campos obrigatórios ausentes!" });
  }

  const clienteExistente = await clientesService.getById(clienteId);
  if (clienteExistente.length === 0) {
    return res.status(404).json({ message: "Cliente não encontrado!" });
  }

  await clientesService.update(clienteId, { nome, telefone, email, endereco });
  res.status(204).json();
}

async function deleteCliente(req, res) {
  const { clienteId } = req.params;
  if (!clienteId || isNaN(clienteId)) {
    return res.status(400).json({ message: "ID inválido!" });
  }

  const cliente = await clientesService.getById(clienteId);
  if (cliente.length === 0) {
    return res.status(404).json({ message: "Cliente não encontrado!" });
  }

  await clientesService.deleteCliente(clienteId);
  res.status(204).json();
}

export default {
  create,
  getAll,
  getById,
  update,
  deleteCliente,
};
