const jwt = require('jsonwebtoken')

const Usuario = require('../model/Usuario');

module.exports = {
    async login(req, res) {
        const { email, senha} = req.body;

        const usuario = await Usuario.findOne({ email: email});

        if (usuario === null) {
            return res.status(404).json({error: "Usuario nao cadastrado."});
        }

        if (usuario.senha === senha) {
            const token = jwt.sign({id: usuario._id},  process.env.JWT_SECRET, {expiresIn: 8300083});

            return res.status(200).json({
                token,
                metodo: "Bearer"
            });
        }

        return res.status(401).json({error: "Credenciais inválidas."});
    }
}