import { Router } from 'express';

const routes = Router();

routes.get('/', (request, response) => {
  return response.send({message: 'Project Structure'});
});

export default routes;