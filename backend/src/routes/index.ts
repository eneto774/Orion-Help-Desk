import { Router } from 'express';
import usersRouter from './users.routes';

const routes = Router();

routes.get('/', (request, response) => {
  return response.send({ message: 'Welcome' });
});

routes.use('/users', usersRouter);

export default routes;
