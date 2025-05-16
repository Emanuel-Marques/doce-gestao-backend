import estoqueService from "./estoque.service.js";

async function create(req, res) {
    const { produto_id, quantidade, unidade, minimo, validade } = req.body;
    
    if (!produto_id || !quantidade || !unidade || !minimo || !validade) {
        return res.status(400).json({ message: "Dados do estoque inválidos!" });
    }
    
    const result = await estoqueService.create({ produto_id, quantidade, unidade, minimo, validade });
    res.status(201).json(result);
}

async function getAll(req, res) {
    const result = await estoqueService.getAll();
    res.status(200).json({ data: result });
}

async function getById(req, res) {
    const { id } = req.params;
    const result = await estoqueService.getById(id);
    if (result.length === 0) {
        return res.status(404).json({ message: "Estoque não encontrado!" });
    }
    res.status(200).json({ data: result });
}

async function update(req, res) {
    const { id } = req.params;
    const { produto_id, quantidade, unidade, minimo, validade } = req.body;

    if (!produto_id || !quantidade || !unidade || !minimo || !validade) {
        return res.status(400).json({ message: "Dados do estoque inválidos!" });
    }

    const result = await estoqueService.update(id, { produto_id, quantidade, unidade, minimo, validade });
    if (result.affectedRows === 0) {
        return res.status(404).json({ message: "Estoque não encontrado!" });
    }
    
    res.status(201).json({ message: "Estoque atualizado com sucesso!" });
}

export default {
    create,
    getAll,
    getById,
    update
}