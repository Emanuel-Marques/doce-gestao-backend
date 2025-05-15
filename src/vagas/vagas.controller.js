// src/controllers/vagas.controller.js
import vagasService from "./vagas.service.js";

async function create(req, res) {
  const {
    titulo,
    descricao,
    requisitos,
    responsabilidades,
    departamento,
    localidade,
    tipo,
    salario,
    status,
    data_criacao,
  } = req.body;

  if (
    !titulo ||
    !descricao ||
    !requisitos ||
    !salario ||
    !status ||
    !data_criacao
  ) {
    return res.status(400).json({ message: "Campos obrigatórios ausentes!" });
  }

  const vaga = {
    titulo,
    descricao,
    requisitos,
    responsabilidades,
    departamento,
    localidade,
    tipo,
    salario,
    status,
    data_criacao,
  };
  const { insertId } = await vagasService.create(vaga);
  res.status(201).json({ insertId });
}

async function getAll(req, res) {
  const result = await vagasService.getAll();
  res.status(200).json({ data: result });
}

async function getById(req, res) {
  const { vagaId } = req.params;
  if (!vagaId || isNaN(vagaId)) {
    return res.status(400).json({ message: "ID inválido!" });
  }

  const result = await vagasService.getById(vagaId);
  if (result.length === 0) {
    return res.status(404).json({ message: "Vaga não encontrada!" });
  }

  res.status(200).json({ data: result });
}

async function update(req, res) {
  const {
    titulo,
    descricao,
    requisitos,
    responsabilidades,
    departamento,
    localidade,
    tipo,
    salario,
    status,
  } = req.body;

  if (
    !vagaId ||
    isNaN(vagaId) ||
    !titulo ||
    !descricao ||
    !requisitos ||
    !salario ||
    !status
  ) {
    return res
      .status(400)
      .json({ message: "ID ou campos obrigatórios ausentes!" });
  }

  await vagasService.update(vagaId, {
    titulo,
    descricao,
    requisitos,
    responsabilidades,
    departamento,
    localidade,
    tipo,
    salario,
    status,
  });
  res.status(204).json();
}

async function deleteVaga(req, res) {
  const { vagaId } = req.params;
  if (!vagaId || isNaN(vagaId)) {
    return res.status(400).json({ message: "ID inválido!" });
  }

  const vaga = await vagasService.getById(vagaId);
  if (vaga.length === 0) {
    return res.status(404).json({ message: "Vaga não encontrada!" });
  }

  await vagasService.deleteVaga(vagaId);
  res.status(204).json();
}

export default {
  create,
  getAll,
  getById,
  update,
  deleteVaga,
};
