import {Router} from 'express';

import CadastroController from './controllers/CadastroController'

const routes = Router();

routes.post('/cadastros',CadastroController.create);
routes.get('/cadastros',CadastroController.list);
routes.put('/cadastros',CadastroController.update);


export default routes;