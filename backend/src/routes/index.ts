import { Router } from 'express';
import ensureAuthentication from '../middlewares/ensureAuthentication';
import authRouter from './auth.routes';
import usersRouter from './users.routes';

const routes = Router();

routes.post('/', (request, response) => {
  return response.send({ message: 'Welcome' });
});

routes.use('/users', usersRouter);
routes.use('/auth', authRouter);
routes.use(ensureAuthentication);

export default routes;
