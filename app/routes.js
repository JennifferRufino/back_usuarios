const {Router} = require('express');

const Usuarios = require('./controller/usuarios');
const Login = require('./controller/login');

const auth = require('./middlewares/auth');

const routes = Router();

routes.post('/usuarios', Usuarios.store);
routes.post('/login', Login.login);

routes.use(auth);

routes.get('/usuarios', Usuarios.index);
routes.put('/usuarios', Usuarios.update);

module.exports = routes;