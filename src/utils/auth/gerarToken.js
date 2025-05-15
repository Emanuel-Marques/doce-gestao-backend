import jwt from 'jsonwebtoken';

const gerarToken = (utilizador) => {
    const secret = process.env.JWT_SECRET;
    const jwtConfig = {
        expiresIn: '1d',
        algorithm: 'HS256'
    }
    const token = jwt.sign(
        {
            data: { email: utilizador.email, nome: utilizador.nome, cargo: utilizador.cargo }
        },
        secret, 
        jwtConfig
    )
    return token;
}

export { gerarToken };