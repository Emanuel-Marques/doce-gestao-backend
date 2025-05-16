import estoqueModel from "./estoque.model.js";

async function create({ produto_id, quantidade, unidade, minimo, validade }) {
    const result = await estoqueModel.create({produto_id, quantidade, unidade, minimo, validade});
    return result;
}

async function getAll() {
    const result = await estoqueModel.getAll();
    return result;
}

async function getById(id) {
    const result = await estoqueModel.getById(id);
    return result;
}

async function update(id, dados) {
    const result = await estoqueModel.update(id, dados);
    return result;
}
export default {
    create,
    getAll,
    getById,
    update,
}