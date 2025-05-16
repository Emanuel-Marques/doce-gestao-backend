
-- Tabela de fornecedores
CREATE TABLE IF NOT EXISTS fornecedores (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(100),
  telefone VARCHAR(20),
  email VARCHAR(100),
  endereco VARCHAR(255)
);

-- Inserir dados de fornecedores
INSERT INTO fornecedores (nome, telefone, email, endereco) VALUES
('Distribuidora de Farinhas', '915555123', 'vendas@farinhapro.co.ao', 'Rua da Missão, Huambo'),
('Açúcar & Cia', '925123456', 'acucarecia@exemplo.co.ao', 'Bairro Cassenda, Luanda'),
('Distribuidora de Laticínios', '924111222', 'contato@laticinios.co.ao', 'Av. Brasil, Lubango');

-- Tabela de produtos
CREATE TABLE IF NOT EXISTS produtos (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(100),
  preco DECIMAL(10,2),
  categoria VARCHAR(50),
  descricao TEXT,
  unidade VARCHAR(20),
  fornecedor_id INT,
  FOREIGN KEY (fornecedor_id) REFERENCES fornecedores(id)
);

-- Inserir produtos alimentares
INSERT INTO produtos (nome, preco, categoria, descricao, unidade, fornecedor_id) VALUES
('Farinha de Trigo', 1500, 'Grãos', 'Farinha de trigo tipo 1', 'Kg', 1),
('Açúcar Refinado', 1200, 'Grãos', 'Açúcar refinado branco', 'Kg', 2),
('Feijão Preto', 1000, 'Grãos', 'Feijão preto seco', 'Kg', 1),
('Arroz Agulha', 1300, 'Grãos', 'Arroz tipo agulha polido', 'Kg', 1),
('Leite UHT', 2500, 'Laticínios', 'Leite longa vida integral', 'Litros', 3),
('Sal Refinado', 500, 'Temperos', 'Sal refinado iodado', 'Kg', 2);

-- Tabela de estoque
CREATE TABLE IF NOT EXISTS estoque (
  id INT PRIMARY KEY AUTO_INCREMENT,
  produto_id INT,
  quantidade INT,
  unidade VARCHAR(20),
  minimo INT DEFAULT 0,
  validade DATE,
  FOREIGN KEY (produto_id) REFERENCES produtos(id) ON DELETE CASCADE
);

-- Inserir dados no estoque
INSERT INTO estoque (produto_id, quantidade, unidade, minimo, validade) VALUES
(1, 30, 'Kg', 10, '2024-12-31'),
(2, 50, 'Kg', 15, '2025-06-10'),
(3, 25, 'Kg', 10, '2024-11-30'),
(4, 60, 'Kg', 20, '2025-01-15'),
(5, 40, 'Litros', 20, '2024-10-05'),
(6, 100, 'Kg', 30, '2025-02-20');

-- Tabela de clientes
CREATE TABLE IF NOT EXISTS clientes (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(100),
  telefone VARCHAR(20),
  email VARCHAR(100),
  endereco VARCHAR(255)
);

-- Inserir dados de clientes
INSERT INTO clientes (nome, telefone, email, endereco) VALUES
('Maria Silva', '923456789', 'maria@exemplo.co.ao', 'Rua das Flores, 123, Luanda'),
('João Santos', '912345678', 'joao@exemplo.co.ao', 'Av. da República, 456, Luanda'),
('Ana Pereira', '945678901', 'ana@exemplo.co.ao', 'Rua das Palmeiras, 789, Benguela');

-- Tabela de usuários
CREATE TABLE IF NOT EXISTS utilizadores (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(100),
  email VARCHAR(100),
  senha VARCHAR(255),
  cargo VARCHAR(50),
  status ENUM('ativo', 'inativo'),
  data_criacao DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Inserir usuários
INSERT INTO utilizadores (nome, email, senha, cargo, status) VALUES
('Administrador', 'admin@armazem.co.ao', 'admin', 'Gerente', 'ativo');

CREATE TABLE IF NOT EXISTS vagas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(100) NOT NULL,
  descricao TEXT NOT NULL,
  requisitos TEXT NOT NULL,
  responsabilidades TEXT,
  departamento VARCHAR(100),
  localidade VARCHAR(100),
  tipo ENUM('tempo_integral', 'remoto', 'hibrido') DEFAULT 'tempo_integral',
  salario DECIMAL(10,2) NOT NULL,
  status ENUM('aberta', 'fechada') DEFAULT 'aberta',
  data_criacao DATETIME DEFAULT CURRENT_TIMESTAMP
);


-- Inserir vagas
INSERT INTO vagas (titulo, descricao, requisitos, responsabilidades, departamento, localidade, tipo, salario, status) VALUES
('Repositor de Estoque', 'Organizar e repor mercadorias no armazém.', 'Ensino médio, disponibilidade física.', "Organizar e repor mercadorias no armazém", "Produção", "Luanda", "tempo_integral", 80000, 'aberta'),
('Motorista de Entrega', 'Fazer entregas para clientes.', 'Carta de condução profissional.', "Fazer entregas para clientes.", "Produção", "Luanda", "tempo_integral", 100000, 'aberta');

-- Tabela de candidaturas
CREATE TABLE IF NOT EXISTS candidaturas (
  id INT PRIMARY KEY AUTO_INCREMENT,
  vaga_id INT,
  candidato_nome VARCHAR(100),
  email VARCHAR(100),
  telefone VARCHAR(20),
  experiencia TEXT,
  status ENUM('em_analise', 'aprovado', 'rejeitado'),
  data_envio DATE,
  FOREIGN KEY (vaga_id) REFERENCES vagas(id)
);

-- Inserir candidaturas
INSERT INTO candidaturas (vaga_id, candidato_nome, email, telefone, experiencia, status, data_envio) VALUES
(1, 'Pedro Silva', 'pedro@exemplo.co.ao', '923456789', '2 anos em supermercado', 'em_analise', '2024-07-02'),
(2, 'Carlos Santos', 'carlos@exemplo.co.ao', '945678901', '3 anos em transportes', 'aprovado', '2024-07-03');

CREATE TABLE IF NOT EXISTS vendas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  cliente_id INT,
  data_venda DATE NOT NULL,
  total DECIMAL(10,2) NOT NULL,
  FOREIGN KEY (cliente_id) REFERENCES clientes(id) ON DELETE SET NULL
);

CREATE TABLE IF NOT EXISTS itens_venda (
  id INT AUTO_INCREMENT PRIMARY KEY,
  venda_id INT,
  produto_id INT,
  quantidade INT,
  preco_unitario DECIMAL(10,2),
  total DECIMAL(10,2),
  FOREIGN KEY (venda_id) REFERENCES vendas(id) ON DELETE CASCADE,
  FOREIGN KEY (produto_id) REFERENCES produtos(id)
);

