import candidaturasService from "./candidaturas.service.js";

async function create(req, res) {
  const { vaga_id, candidato_nome, email, telefone, experiencia, status, data_envio } = req.body;

  if (!vaga_id || !candidato_nome || !email || !status || !data_envio) {
    return res.status(400).json({ message: "Campos obrigatórios ausentes!" });
  }

  const candidatura = {
    vaga_id,
    candidato_nome,
    email,
    telefone,
    experiencia,
    status,
    data_envio
  };

  const { insertId } = await candidaturasService.create(candidatura);
  res.status(201).json({ insertId });
}

async function getAll(req, res) {
  const result = await candidaturasService.getAll();
  res.status(200).json({ data: result });
}

async function getById(req, res) {
  const { candidaturaId } = req.params;
  if (!candidaturaId || isNaN(candidaturaId)) {
    return res.status(400).json({ message: "ID inválido!" });
  }

  const result = await candidaturasService.getById(candidaturaId);
  if (result.length === 0) {
    return res.status(404).json({ message: "Candidatura não encontrada!" });
  }

  res.status(200).json({ data: result });
}

async function update(req, res) {
  const { candidaturaId } = req.params;
  const { vaga_id, candidato_nome, email, telefone, experiencia, status } = req.body;

  if (!vaga_id || !candidato_nome || !email || !status) {
    return res.status(400).json({ message: "Campos obrigatórios ausentes!" });
  }

  const existente = await candidaturasService.getById(candidaturaId);
  if (existente.length === 0) {
    return res.status(404).json({ message: "Candidatura não encontrada!" });
  }

  await candidaturasService.update(candidaturaId, {
    vaga_id,
    candidato_nome,
    email,
    telefone,
    experiencia,
    status
  });

  res.status(204).json();
}

async function deleteCandidatura(req, res) {
  const { candidaturaId } = req.params;
  if (!candidaturaId || isNaN(candidaturaId)) {
    return res.status(400).json({ message: "ID inválido!" });
  }

  const candidatura = await candidaturasService.getById(candidaturaId);
  if (candidatura.length === 0) {
    return res.status(404).json({ message: "Candidatura não encontrada!" });
  }

  await candidaturasService.deleteCandidatura(candidaturaId);
  res.status(204).json();
}

export default {
  create,
  getAll,
  getById,
  update,
  deleteCandidatura,
};
