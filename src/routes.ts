import { Router } from 'express'
import legendsController from './legends/legends.controller';

const routes = Router();

routes.get('/', legendsController.list);
routes.get('/:name', legendsController.findName);

export default routes;