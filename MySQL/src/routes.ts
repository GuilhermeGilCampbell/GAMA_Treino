import {Router} from 'express';

import CadastroController from './controllers/CadastroController'

const routes = Router();

routes.post('/cadastros',CadastroController.create);
routes.get('/cadastros',CadastroController.list);
routes.put('/cadastros/:id',CadastroController.update);
routes.get('/cadastros/:id',CadastroController.find);
routes.delete('/cadastros/:id',CadastroController.delete);



export default routes;