const Usuario = require('../model/Usuario');

module.exports = {
  async store(req, res) {
    const { email, senha, nome, telefone } = req.body;

    const existeUsuario = await Usuario.findOne({ email: email});

    if (existeUsuario != null) {
      return res.status(400).json({error: "Usuario ja cadastrado."})
    }

    const usuario = await Usuario.create({
      email,
      nome,
      telefone,
      senha
    });

    return res.status(201).json({
      usuario: {
        id: usuario._id,
        email: usuario.email,
        nome: usuario.nome,
        telefone: usuario.telefone
      }
    });
  },

  async index(req, res) {
    const id = req.userId;

    const usuario = await Usuario.findById(id);

    return res.status(200).json(usuario);
  },

  async update(req, res) {
    const { email, senha, nome, telefone } = req.body;

    const existeUsuario = await Usuario.findById(req.userId);

    if (existeUsuario == null) {
      return res.status(400).json({error: "Usuario não cadastrado."})
    }

    if (email != null) {
      existeUsuario.email = email;
    }

    if (senha != null) {
      existeUsuario.senha = senha;
    }

    if (nome != null) {
      existeUsuario.nome = nome;
    }

    if (telefone != null) {
      existeUsuario.telefone = telefone;
    }

    await existeUsuario.save();

    return res.status(200).json({message: "Usuario atualizado"});
  }
};
