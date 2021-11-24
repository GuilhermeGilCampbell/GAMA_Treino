import {Router} from 'express';

import CadastroController from './controllers/CadastroController'
import ClienteController from './controllers/ClienteController'

const routes = Router();

routes.post('/cadastros',CadastroController.create);
routes.get('/cadastros',CadastroController.list);
routes.put('/cadastros/:id',CadastroController.update);
routes.get('/cadastros/:id',CadastroController.find);
routes.delete('/cadastros/:id',CadastroController.delete);

routes.post('/client',ClienteController.create);

export default routes;