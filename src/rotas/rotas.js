const express = require('express');
const {
    cadastrarUsuario,
    editarUsuario,
    detalharUsuario,
} = require('../controladores/usuarios');

const efetuarLogin = require('../controladores/login');

const schemaCadastroUsuario = require('../validacoes/schemaCadastroUsuario');
const {
    validarCorpo,
    verificarToken,
} = require('../intermediarios/validarCorpo');
const validarParametroDeRota = require('../intermediarios/validarParametrosRota');
const validarCpf_Email = require('../intermediarios/validarCpf');
const rotas = express.Router();
rotas.post('/usuario', validarCorpo(schemaCadastroUsuario), cadastrarUsuario);
rotas.post('/login', validarCorpo(schemaLogin), efetuarLogin);
rotas.use(verificarToken);

rotas.put(
    '/usuario',
    validarCorpo(schemaCadastroUsuario),
    validarCpf_Email,
    editarUsuario
);
rotas.get('/usuario', detalharUsuario);
module.exports = rotas;