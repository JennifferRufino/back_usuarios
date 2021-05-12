const mongoose = require('../../config/mongoose');

const Usuario = new mongoose.Schema({
    nome: String,
    email: String,
    senha: String,
    telefone: String
});

const UsuarioModel = mongoose.model('Usuario', Usuario);

module.exports = UsuarioModel;