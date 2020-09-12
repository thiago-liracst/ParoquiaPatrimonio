const express = require('express');

const routes = express.Router();

const ImoveisController = require('./controllers/ImoveisController');
const RegistrosConstroller = require('./controllers/RegistrosConstroller');

routes.post('/imoveis', ImoveisController.create);
routes.get('/imoveis', ImoveisController.list);
routes.put('/imoveis', ImoveisController.update);
routes.post('/imoveis/delete', ImoveisController.delete);

routes.post('/registros', RegistrosConstroller.create);
routes.get('/registros', RegistrosConstroller.list);
routes.post('/registros/list', RegistrosConstroller.listSpecific);
routes.put('/registros', RegistrosConstroller.addAnot);
routes.post('/registros/delete', RegistrosConstroller.delete);

routes.post('/cobrancas', ImoveisController.cobrancas);

module.exports = routes;